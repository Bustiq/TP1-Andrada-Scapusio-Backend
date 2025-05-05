import express, { Request, Response } from 'express';

import {productoRoutes} from './routes/productosR'
import { homeRouter } from './routes/home';
import { ProductoController, VerificarConexionProductos, SincronizarProductos } from './controllers/productosController';
import { VerificarConexionUsuarios, SincronizarUsuarios } from './controllers/usuariosController';
import { Usuario } from './models/usuario';

const cors = require("cors"); 

const a = new Usuario(1, "asasa", "asasa", true)

VerificarConexionProductos()
SincronizarProductos()

VerificarConexionUsuarios()
SincronizarUsuarios()



const app = express()
const port = 3000
app.use(cors());
app.use(express.json())
app.use("/productos", productoRoutes)
app.use("/home", homeRouter)


/*app.get('/mascotas', (req: Request, res: Response) => {
    res.json(mascotas);
});

app.get('/json', (req: Request, res: Response) => {
  var json = JSON.stringify(mascotasJson)
  res.send(json);
});*/

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    
});






