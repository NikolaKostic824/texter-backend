import express from 'express';
import {
    createText,
    updateText,
    deleteText,
    approveText,
    getAllTextsByAuthor,
    getText,
    getAllTexts,
    getAllMims,
    getAllPolitics,
    getAllSport,
    getAllStories,
    getAllSvastara,
    getAllCulture,
    getAllReaders,
    getAllTextsAdmin,
    getAllTextsSwipe
} from '../controllers/text.js';
//Router Creation
const router = express.Router();
//Text routes
router.post('/', createText);
router.patch('/:id', updateText);
router.patch('/approve/:id', approveText);
router.delete('/:id', deleteText);
router.get('/sorted_text_author/:id', getAllTextsByAuthor);
router.get('/category/mimovi', getAllMims);
router.get("/category/politika", getAllPolitics);
router.get("/category/sport", getAllSport);
router.get("/category/price", getAllStories);
router.get("/category/svastara", getAllSvastara);
router.get("/category/kultura", getAllCulture);
router.get("/category/citaoci", getAllReaders);
router.get("/admin", getAllTextsAdmin);
router.get("/swipe", getAllTextsSwipe);
router.get('/:id', getText);
router.get("/", getAllTexts);
export default router;