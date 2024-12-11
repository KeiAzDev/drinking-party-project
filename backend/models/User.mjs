import {Schema, model} from 'mongoose';

const userSchema = Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['participant', 'organizer'], default: 'participant' }
});


const User = model('User', userSchema);
export default User;
