import app from './main';
import sequelize from './config/database';
import './models/ModeloLibro';

const PORT = 3001;

(async () => {
  try {
    await sequelize.sync();
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
  }
})();
