import express, { Request, Response } from 'express';

import { Sequelize, DataTypes } from 'sequelize';



export let signUpRouter = express.Router()

    
import { controllerUsuario } from '../controllers/controllerUsuario';



//var validate = require('jsonschema').validate;





    signUpRouter.post('/', (req: Request, res: Response) => {
        if (!req.body.nombre || !req.body.password ) {
                res.send('Request body is invalid');
                return;
        }

        try{
            res.send(controllerUsuario.signUp(req.body.nombre, req.body.password))
        }catch(e){
            res.status(401).send(e)
        }
    });


    signUpRouter.get('/', async (req: Request, res: Response) => {
        console.log("devolviendo?")
        console.log(controllerUsuario.GetUsuarios())
        res.json(await controllerUsuario.GetUsuarios())

    });

