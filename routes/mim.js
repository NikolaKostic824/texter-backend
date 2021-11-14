import express from 'express';
import {
    createMim,
    getMims,
    deleteMim
} from '../controllers/mim.js'

//Router Creation
const router = express.Router();

//Mim Routes
router.post('/', createMim);
router.get('/',getMims);
router.delete('/:id', deleteMim);


export default router;