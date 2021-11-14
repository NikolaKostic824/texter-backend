import express from 'express';
import {
    createText,
    updateText,
    deleteText,
    approveText,
    getAllTextsByAuthor,
    getText,
    getAllTexts,
    getAllByTheme
/*     getAllMims,
    getAllPolitics,
    getAllSport,
    getAllStories,
    getAllRandom,
    getAllCulture,
    getAllReaders, */
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
/* router.get("/mimovi", getAllMims);
router.get("/politika", getAllPolitics);
router.get("/sport", getAllSport);
router.get("/price", getAllStories);
router.get("/rendom", getAllRandom);
router.get("/kultura", getAllCulture);
router.get("/citaoci", getAllReaders); */
router.get("/:theme", getAllByTheme);

export default router;