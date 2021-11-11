import Mim from '../model/mim.js';

//Create new mim
export const createMim = async (req, res) => {
    
    try {
        const mim = req.body;
        const newMim = new Mim(mim);
        console.log(req)
        await newMim.save()
        res.status(201).json({
            message: 'Post saved'
        });
        res.end();
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
}

//Get all mims
export const getMims = async (req,res) => {
    try {
        const mims = await Mim.find();
        res.status(200).json(mims)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}