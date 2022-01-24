import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Application = express();

dotenv.config();

app.use(express.json());

// Default
app.get("/api", (req: Request, res: Response) =>  {
    res.status(201).json({ message: "Welcome to Auth ts" });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void => console.log(`Server is running on ${PORT}`));