import cloudinary from "../lib/cloudinary.js";
import { io, getReceiverSocketId } from "../lib/socket.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = await User.findById(req.user._id);

    if (!loggedInUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get users of opposite role (Doctors see Patients, Patients see Doctors)
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser._id },
      role: loggedInUser.role === "Doctor" ? "Patient" : "Doctor",
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("getUsersForSidebar error: " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const myUser = await User.findById(myId);
    const otherUser = await User.findById(userToChatId);

    if (!myUser || !otherUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Ensure only doctor-patient chats are allowed
    if (myUser.role === otherUser.role) {
      return res.status(403).json({ message: "You can only chat with users of the opposite role" });
    }

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("getMessages Controller error: " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({ message: "User not found" });
    }

    // Ensure only doctor-patient messaging is allowed
    if (sender.role === receiver.role) {
      return res.status(403).json({ message: "You can only message users of the opposite role" });
    }

    if (sender.blockedUsers?.includes(receiverId) || receiver.blockedUsers?.includes(senderId)) {
      return res.status(403).json({
        message: sender.blockedUsers.includes(receiverId) ? "Unblock user to send messages" : "Message blocked by the recipient",
      });
    }

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("sendMessage error: " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { getUsersForSidebar, getMessages, sendMessage };
