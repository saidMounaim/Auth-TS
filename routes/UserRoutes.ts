import express from 'express';
import { login, register } from '../controllers/UserController';

const router = express.Router();

router.post("/", login);
router.post("/register", register);

export default router;