
import express, { Request, Response } from 'express';
import { ProductoController } from '../controllers/productosController';

export let productoRoutes = express.Router()



productoRoutes.get('/abm', async (req: Request, res: Response) => {
    
    res.json(await ProductoController.GetProductos())
});

productoRoutes.get('/abm/:id', async (req: Request, res: Response) => {
    try{
        res.status(204)
        //res.json(await ProductoController.GetProductoById(Number(req.params.id)))
        let resultado = await ProductoController.GetProductoById(Number(req.params.id))
        console.log(resultado)
        res.json(resultado)
    }
    catch (error)
    {
        res.sendStatus(400)
    }

});

productoRoutes.post('/abm', async (req, res) => {
    try{
        
        await ProductoController.PostProducto(req.body.nombre, Number(req.body.precio), Boolean(req.body.enStock))
        res.sendStatus(204)
    }
    catch (error)
    {
        res.sendStatus(500)
    }
})
productoRoutes.delete('/abm/:id', async (req, res) => {

    try{
        await ProductoController.DeleteProducto(Number(req.params.id))
        res.sendStatus(204)
    }
    catch (error)
    {
        res.sendStatus(400)
    }
})

productoRoutes.put('/abm/:id', async (req, res) => {
    try{
        await ProductoController.PutProducto(Number(req.params.id), req.body.nombre, Number(req.body.precio), Boolean(req.body.enStock))
        res.sendStatus(204)
    }
    catch (error)
    {
        res.sendStatus(400)
    }
})


/*
productoRoutes.patch('/abm', (req, res) => {
    ProductoController.ChangeProducto(req.body.id)
    res.json(ProductoController.GetProductos())
})
*/