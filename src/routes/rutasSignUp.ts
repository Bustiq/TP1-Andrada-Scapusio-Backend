import express, { Request, Response } from 'express';

import { Sequelize, DataTypes } from 'sequelize';


    export let signUpRouter = express.Router()

    import { controllerUsuario } from '../controllers/controllerUsuario';


    signUpRouter.post('/', (req: Request, res: Response) => {
       
        res.send(controllerUsuario.signUp(req.body))
    });

