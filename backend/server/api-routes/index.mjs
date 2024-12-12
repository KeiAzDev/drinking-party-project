import express from "express";
import userRouter from "./userRoutes.mjs";
import eventRouter from "./calendarRoutes.mjs"

const router = express.Router();
router.use('/users', userRouter);
router.use('/events', eventRouter);

export default router;