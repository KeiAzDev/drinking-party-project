import express from 'express';
import User from '../../models/User.mjs';

const router = express.Router();

// GET - ユーザーの一覧を取得
router.get('/', async (req, res) => {
        const users = await User.find();
        res.json(users);
});

// POST - 新しいユーザーを作成
router.post('/', async (req, res) => {
        const user = new User(req.body);
        const newUser = await user.save();
        res.status(201).json(newUser);
});

// DELETE - ユーザーを削除
router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    await User.deleteOne({_id});
    res.status(201).json({"msg":"User Delete Succeeded"});
});

// PATCH - ユーザーを更新 これは必要か？
router.patch('/:id', async (req, res) => {
    const { name, email, role } = req.body;
    const _id = req.params.id;
    const user = await User.findById(_id);
    if(name !== undefined) user.name = name;
    if(email !== undefined) user.email = email;
    if(role !== undefined) user.role = role;
    await user.save();
    res.json(user);
});

export default router;
