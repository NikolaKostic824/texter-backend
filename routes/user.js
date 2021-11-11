import express from 'express';
import {
    createUser,
    editUser,
    getAllUsers,
    loginUser,
    deleteUser,
    getUser
} from '../controllers/user.js';

//Router Creation
const router = express.Router();

//User Routes
router.post('/', createUser);
router.patch('/:id', editUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/login', loginUser);
router.delete('/:id', deleteUser);

export default router;