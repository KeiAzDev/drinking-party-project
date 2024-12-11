import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import "./helpers/db.mjs"
dotenv.config();

// Routes
import userRoutes from './routes/userRoutes.mjs';
import calendarRoutes from './routes/calendarRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/events', calendarRoutes);



// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});