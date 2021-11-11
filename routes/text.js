import express from 'express';
import {
    createText,
    updateText,
    deleteText,
    approveText,
    getAllTextsByAuthor,
    getText,
    getAllTexts
} from '../controllers/text.js';

//Router Creation
const router = express.Router();

//Text routes
router.post('/', createText);
router.patch('/:id', updateText);
router.patch('/approve/:id', approveText);
router.delete('/:id', deleteText);
router.get('/sorted_text_author/:author', getAllTextsByAuthor);
router.get('/:id', getText);
router.get("/", getAllTexts);
export default router;