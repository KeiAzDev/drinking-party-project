import express from 'express';
import {body} from "express-validator";
import { registEvent, updateEvent, getAllEvents, deleteEvent } from '../controllers/events.mjs';
import { requestErrorHandler } from '../../middlewares/requestErrorHandler.mjs';

const router = express.Router();

// GET - イベントの一覧を取得
router.get('/', requestErrorHandler(getAllEvents));

// POST - 新しいイベントを作成
router.post('/',
    body('name').notEmpty(), 
    body('date').notEmpty(), 
    requestErrorHandler(registEvent)
);

// DELETE - イベントを削除
router.delete('/:id', requestErrorHandler(deleteEvent));

// PATCH - イベントを更新
router.patch('/:id',
    body('name').optional().notEmpty(), 
    body('date').optional().notEmpty(), 
    requestErrorHandler(updateEvent)
);

export default router;
