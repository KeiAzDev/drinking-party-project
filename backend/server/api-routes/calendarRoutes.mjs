import express from 'express';
import Event from '../../models/Event.mjs';

const router = express.Router();

// GET - イベントの一覧を取得
router.get('/', async (req, res) => {
        const events = await Event.find();
        res.json(events);
});

// POST - 新しいイベントを作成
router.post('/', async (req, res) => {
        const event = new Event(req.body);
        const newEvent = await event.save();
        res.status(201).json(newEvent);
});

// DELETE - イベントを削除
router.delete('/:id', async (req, res) => {
    const _id = req.params.id;
    await Event.deleteOne({_id});
    res.status(201).json({"msg":"Event Delete Succeeded"});
});

// PATCH - イベントを更新
router.patch('/:id', async (req, res) => {
    const { name, date } = req.body;
    const _id = req.params.id;
    const event = await Event.findById(_id);
    if(name !== undefined) event.name = name;
    if(date !== undefined) event.date = date;
    await event.save();
    res.json(event);
});

export default router;
