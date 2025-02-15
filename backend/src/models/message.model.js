import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat", // Reference to the Chat model
        required: true,
      },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Can reference either Doctor or Patient
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Can reference either Doctor or Patient
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
