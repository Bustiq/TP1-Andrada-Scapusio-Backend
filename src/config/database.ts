import { Sequelize } from 'sequelize';
import env from 'dotenv';

env.config()

var nombreBase = process.env.DB_NAME
var usuario = process.env.DB_USER
var pass = process.env.DB_PASS
var host = process.env.DB_HOST

console.log("Base de datos: " + nombreBase)
console.log("Usuario: " + usuario)
console.log("Pass: " + pass)

if (!nombreBase || !usuario || !pass){
  throw new Error("Variables de entorno no encontradas: " + nombreBase + " " + usuario + " " + pass)
}




const sequelize = new Sequelize(nombreBase, usuario, pass, {
  host: host,
  dialect: 'mysql'
});


export async function VerificarConexion(){
  try {
      await sequelize.authenticate();
      console.log('Connection successful (Usuarios Controller).');
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
}

export async function Sincronizar() {
  await sequelize.sync()
}


export default sequelize;