import { validationResult } from "express-validator";
import Event from "../../models/Event.mjs";

async function getAllEvents(req, res) {
    const events = await Event.find();
    res.json(events);
};

async function registEvent(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errs = errors.array();
        return res.status(400).json(errs);
    }

    const event = new Event(req.body);
    const newEvent = await event.save();
    res.status(201).json(newEvent);
};

async function updateEvent(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
    }

    const { name, date } = req.body;
    const _id = req.params.id;
    const event = await Event.findById(_id);

    if(event === null) return res.status(404).json({msg: "Page Not Found"});

    if (name !== undefined) event.name = name;
    if (date !== undefined) event.date = date;
    await event.save();
    res.json(event);
};

async function deleteEvent(req, res) {
    const _id = req.params.id;
    const {deleteCount} = await Event.deleteOne({_id});
    if(deleteCount === 0) return res.status(404).json({msg: "Page Not Found"});
    res.status(201).json({"msg":"Event Delete Succeeded"});
};

export { registEvent, updateEvent, getAllEvents, deleteEvent };
