import express, { Request, Response } from 'express';
import { controllerProducto } from '../controllers/controllerProducto';
import { authenticateToken } from '../middleware/middleware';

export let productosRouter = express.Router()


productosRouter.get('/abm', authenticateToken, async (req: Request, res: Response) => {

    console.log("devolviendo productos?")
    res.json(await controllerProducto.devolverTodosLosProductos());

});

productosRouter.get('/abm:id', authenticateToken,  async (req: Request, res: Response) => {
    res.json(controllerProducto.devolverUnProducto(Number(req.params.id)));
});

productosRouter.post('/abm',authenticateToken,  async (req: Request, res: Response) => {
    //console.log("ASDASDASD: " + req.header("Authentication"))


    const producto =  controllerProducto.crearProducto(req.body.nombre, req.body.precio, req.body.stock);

});

productosRouter.put('/abm',authenticateToken,  (req: Request, res: Response) => {

    const producto =  controllerProducto.updetearProducto(req.body.id, req.body.nombre, req.body.precio, req.body.stock);

});

productosRouter.delete('/abm',authenticateToken,  (req: Request, res: Response) => {
    
    controllerProducto.deletearProducto(req.body.id);
    res.status(200).send();
});