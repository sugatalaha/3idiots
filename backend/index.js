import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import { connectDB } from './src/lib/db.js';
import authRoutes from './src/routes/auth.route.js';
import messageRoutes from './src/routes/message.route.js';
import searchRoutes from './src/routes/search.route.js';


dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true,
}));

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/search',searchRoutes);


app.listen(PORT, ()=>{
    console.log('Server started on http://localhost:'+PORT);
    connectDB();
});