import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class ModeloUsuario extends Model {
    public id!: number;
    public nombre! : string;
    public password!: string;
}   

ModeloUsuario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      }
    },
    {
      sequelize,
      modelName: 'Usuario',
    }
  );

  export default ModeloUsuario;