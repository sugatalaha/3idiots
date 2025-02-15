import express from "express";
import Chat from "../models/chat.model.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @route   POST /api/chat/forward
 * @desc    Add a forwarded user to a chat
 * @access  Protected
 */
router.post("/", protectRoute, async (req, res) => {
  try {
    const { chatId, forwardedUserId } = req.body;

    if (!chatId || !forwardedUserId) {
      return res.status(400).json({ message: "Chat ID and Forwarded User ID are required." });
    }

    // Find chat by ID
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found." });
    }

    // Check if the forwarded user is already in forwarded_users
    if (chat.forwarded_users.includes(forwardedUserId)) {
      return res.status(400).json({ message: "User already forwarded to this chat." });
    }

    // Add forwarded user to forwarded_users array
    chat.forwarded_users.push(forwardedUserId);
    await chat.save();

    return res.status(200).json({ message: "User successfully forwarded to chat.", chat });
  } catch (error) {
    console.error("Forward user error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
