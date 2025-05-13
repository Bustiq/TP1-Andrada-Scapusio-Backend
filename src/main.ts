import express, { Request, Response } from 'express';
 

const Sequelize = require("sequelize");

const cors = require("cors");
const app = express();
const port = 3000;

import { librosRouter } from './routes/rutasLibro';
import { loginRouter } from './routes/rutasLogin';
import { signUpRouter } from './routes/rutasSignUp';

app.use(cors());
app.use(express.json());
app.use('/libro', cors());
app.use("/libro", librosRouter);
app.use('/signUp', cors());
app.use("/signUp", signUpRouter);
app.use('/logIn', cors());
app.use("/logIn", loginRouter);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});





export default app;