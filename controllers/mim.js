import Mim from '../model/mim.js';
import mongoose from 'mongoose';

//Create new mim
export const createMim = async (req, res) => {
    const mim = req.body;
    const newMim = new Mim(mim);
    try {
        await newMim.save()
        res.status(201).json({
            message: 'Post saved'
        });
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
}
//Get all mim's
export const getMims = async (req, res) => {
    try {
        const mims = await Mim.find();
        res.status(200).json(mims)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
//Delete mim by ID
export const deleteMim = async (req, res) => {
    const {
        id
    } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Mim with id: ${id}`);
    await Mim.findByIdAndRemove(id);
    res.json({
        message: "Mim was deleted",
    });
};