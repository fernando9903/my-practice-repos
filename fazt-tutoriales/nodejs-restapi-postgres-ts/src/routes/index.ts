import {Router} from 'express'
const router = Router();

import {getUsers, getUserById, createUser} from '../controllers/index.controller';

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
//router.put('/users/:id', getUsers)
//router.delete('/users/:id', getUsers)

export default router;