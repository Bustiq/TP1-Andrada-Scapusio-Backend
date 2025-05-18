import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mascotas', 'root', 'papulin', {
  host: 'localhost',
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