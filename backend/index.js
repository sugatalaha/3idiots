import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import { connectDB } from './src/lib/db.js';
import authRoutes from './src/routes/auth.route.js';

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);

app.listen(PORT, ()=>{
    console.log('Server started on http://localhost:'+PORT);
    connectDB();
});