import mongoose from 'mongoose';

//Creating User Schema
const user = mongoose.Schema({
    nameUser: String,
    about: String,
    signature: String,
    username: String,
    password: String,
    image: String,
    role: {
        type: Number,
        default: 0
    }
});

//Connect to mongodb
const User = mongoose.model('User', user);

export default User;