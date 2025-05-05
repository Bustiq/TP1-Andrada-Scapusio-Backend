
import express, { Request, Response } from 'express';
import path from 'path'

export let homeRouter = express.Router()


homeRouter.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../home.html"))
});


homeRouter.post('/login', (req: Request, res: Response) => {
    req.body.nombreDeUsuario
    req.body.password




});

