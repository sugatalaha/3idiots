
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";
import { protectRoute } from "../middlewares/auth.middleware.js";
const router=express.Router();


router.post("/", protectRoute,async (req, res) => {
    try {
        console.log(req.body);
        fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.SUMMARIZER_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'google/gemini-2.0-flash-lite-preview-02-05:free', 
              messages: [
                {
                  role: 'system',
                  content: 'Summarize the following conversation between a doctor and a patient in a concise and clear manner.',
                },
                {
                  role: 'user',
                  content: req.body.chatHistory, // Pass the chat history dynamically
                },
              ],
            }),
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.choices[0].message.content);
              return res.status(200).json({summary:data.choices[0].message.content})
            })
            .catch((error) => console.error('Error:', error));

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        return res.status(500).json({ error: error.response?.data || error.message });
    }
});

export default router;