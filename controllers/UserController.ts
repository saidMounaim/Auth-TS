import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

// @Desc Login 
// @Route /api/auth/
// @Method POST
export const login = asyncHandler (async (req: Request, res: Response) => {

    res.status(201).json({ message: "LOGIN" });

})