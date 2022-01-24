import express from 'express';
import { login } from '../controllers/UserController';

const router = express.Router();

router.post("/", login);

export default router;