import express, { Request, Response } from 'express';


export let loginRouter = express.Router()

import { controllerUsuario } from '../controllers/controllerUsuario';

     loginRouter.post('/', async (req: Request, res: Response) => {
        if (!req.body.nombre || !req.body.password ) {
            res.send('Request body is invalid');
            return;
        }

        try{
        res.send(await controllerUsuario.login(req.body.nombre, req.body.password))
        }
        catch(e){
            res.status(401).send(e)
        }

    });




