import Text from '../model/text.js';
import mongoose from 'mongoose';

//Create new text
export const createText = async (req, res) => {
    const text = req.body;
    const newText = new Text(text);
    try {
        await newText.save()
        res.status(201).json({
            message: 'Text saved!'
        });
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
}

//Update existing text by ID
export const updateText = async (req, res) => {
    const {
        id
    } = req.params;
    const updatedText = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    try {
        await Text.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json({
            message: 'Text Updated'
        });
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }

}

// Delete text by ID
export const deleteText = async (req, res) => {
    const {
        id
    } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await Text.findByIdAndRemove(id);
    res.json({
        message: 'Text was deleted'
    });
}

//Approve existing text by ID
export const approveText = async (req, res) => {
    const {
        id
    } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const approvedText = {
        approved: 1
    }
    await Text.findByIdAndUpdate(id, approvedText, {
        new: true
    });
    const newList = await Text.find();
    res.json(newList);
}

//Get all Texts
export const getAllTexts = async (req, res) => {
    try {
        const texts = await Text.find();
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

//Get all text by author
export const getAllTextsByAuthor = async (req, res) => {
    const {
        author
    } = req.params;
    try {
        const textsByAuthor = await Text.find({
            author,
            approved: 1
        });
        res.status(200).json(textsByAuthor);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

//Get text by Id
export const getText = async (req, res) => {
    const {
        id
    } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No text with id: ${id}`);
    try {
        const textById = await Text.findById(id)
        res.status(200).json(textById);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}