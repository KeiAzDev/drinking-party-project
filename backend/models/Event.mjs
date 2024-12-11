import {Schema, model} from 'mongoose';

const eventSchema = Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});


const Event = model('Event', eventSchema);
export default Event;
