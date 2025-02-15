import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import {  getMessages,getUsersForSidebar, sendMessage,makeChat} from '../controller/message.controller.js';


const router = express.Router();


router.post('/user/makechat',protectRoute,makeChat)
router.get('/user',protectRoute,getUsersForSidebar)
router.post('/send/:id',protectRoute,sendMessage)
//router.post('/broadcast',protectRoute,broadcastMessage)
//router.get('/broadcastMessages',protectRoute,getBroadcastMessages)
router.get('/:id',protectRoute,getMessages);

export default router;