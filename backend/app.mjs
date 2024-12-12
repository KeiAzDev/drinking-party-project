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

app.use(function(req, res) {
    res.status(404).json({msg: "Page Not Found"});
});

app.use(function(err, req, res, next) {
    if(res.headersSent) {
        return next();
    }
    res.status(500).json({msg: "不正なエラーが発生しました"});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
