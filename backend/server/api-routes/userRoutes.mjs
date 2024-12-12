import express from 'express';
import {body} from "express-validator";
import { registUser, updateUser, getAllUsers, deleteUser } from '../controllers/users.mjs';
import {requestErrorHandler} from "../../middlewares/requestErrorHandler.mjs";

const router = express.Router();

// GET - ユーザーの一覧を取得
router.get('/', requestErrorHandler(getAllUsers));

// POST - 新しいユーザーを作成
router.post('/',
    body('name').notEmpty(), 
    body('email').notEmpty(), 
    body('role').notEmpty(), 
    requestErrorHandler(registUser)
);

// DELETE - ユーザーを削除
router.delete('/:id', requestErrorHandler(deleteUser));

// PATCH - ユーザーを更新 これは必要か？
router.patch('/:id',
    body('name').optional().notEmpty(), 
    body('email').optional().notEmpty(), 
    body('role').optional().notEmpty(),
    requestErrorHandler(updateUser)
);

export default router;
