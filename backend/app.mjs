import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from "./server/api-routes/index.mjs";
import "./helpers/db.mjs"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
