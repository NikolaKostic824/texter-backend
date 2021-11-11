import express from 'express';
import {
    createMim,
    getMims
} from '../controllers/mim.js'

//Router Creation
const router = express.Router();

//Mim Routes
router.post('/', createMim);
router.get('/',getMims);

export default router;