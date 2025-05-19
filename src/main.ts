import express, { Request, Response } from 'express';
import { VerificarConexion, Sincronizar } from './config/database';

const Sequelize = require("sequelize");

const cors = require("cors");
const app = express();
const port = 3000;


VerificarConexion();
Sincronizar();
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

import { productosRouter } from './routes/rutasProducto';
import { loginRouter } from './routes/rutasLogin';
import { signUpRouter } from './routes/rutasSignUp';

app.use(cors());
app.use(express.json());
app.use('/productos', cors());
app.use("/productos", productosRouter);
app.use('/signUp', cors());
app.use("/signUp", signUpRouter);
app.use('/logIn', cors());
app.use("/logIn", loginRouter);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;