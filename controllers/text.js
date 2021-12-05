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
    await Text.findByIdAndUpdate(id, updatedText, {
        new: true
    });
    res.status(200).json({
        message: 'Text Updated'
    });
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
    res.json({
        message: 'Text was deleted'
    });
}
//Get all Texts
export const getAllTexts = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        });

        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
//Get all Texts for swiper on single text
export const getAllTextsSwipe = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        }).sort({
            _id: -1
        }).limit(6);
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
//Get all texts admin
export const getAllTextsAdmin = async (req, res) => {
    try {
        const texts = await Text.find({}, {
            "_id": 1,
            "title": 1,
            "author": 1,
            "theme": 1,
            "approved": 1
        });

        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
//Get text by category
export const getAllMims = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
            theme: 'Mimovi'
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        });
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
export const getAllPolitics = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
            theme: 'Politika'
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        });
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
export const getAllSport = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
            theme: 'Sport'
        });
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        })
    }
}
export const getAllStories = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
            theme: 'Priče'
        });
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        })
    }
}
export const getAllSvastara = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
            theme: 'Svaštara'
        });
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        })
    }
}
export const getAllCulture = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
            theme: 'Kultura'
        });
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        })
    }
}
export const getAllReaders = async (req, res) => {
    try {
        const texts = await Text.find({
            approved: 1,
            theme: 'Čitaoci pisci'
        });
        res.status(200).json(texts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        })
    }
}
//Get all text by author
export const getAllTextsByAuthor = async (req, res) => {
    const {
        id

    } = req.params;
    try {
        const textsByAuthor = await Text.find({
            authorId:id,
            approved: 1
        }, {
            "_id": 1,
            "title": 1,
            "image": 1,
            "readTime": 1,
            "textSummary": 1,
            "theme": 1,
            "author": 1,
            "authorImage": 1
        });
        res.status(200).json(textsByAuthor);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
//Get text by Id
export const getText = async (req, res,next) => {
    const {
        id
    } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No text with id: ${id}`);
    try {
        const textById = await Text.findById(id)
        res.status(200).json(textById);
        next()
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
        next()

    }
}
