import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import User from '../models/User';

// @Desc Login 
// @Route /api/auth/
// @Method POST
export const login = asyncHandler (async (req: Request, res: Response) => {

    const { email, password } = req.body;
    const user = await User.find({ email });

    if(!user) {
        res.status(401);
        throw new Error("User not found");
    }



})