import mongoose from 'mongoose';

//Creating Text Schema
const text = mongoose.Schema({
    title: String,
    text: Object,
    readTime: String,
    image: String,
    approved: {
        type: Number,
        default: 0
    },
    textSummary: String,
    color: String,
    theme: String,
    author: String,
    authorImage: String,
    authorSignature: String
},{minimize: false });
//Connect to mongodb
const Text = mongoose.model('Text', text);
export default Text;