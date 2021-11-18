import mongoose from 'mongoose';

//Creating Mim Schema
const mim = mongoose.Schema({
    image: String
});
//Connect to mongodb
const Mim = mongoose.model('Mim', mim);
export default Mim;