import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class ModeloProductos extends Model {
    public id!: number;
    public autor! : string;
    public titulo!: string;
    public paginas!: number;
}   

ModeloProductos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      precio: {
        type: DataTypes.FLOAT,
      },
      enStock: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Productos',
    }
  );

  export default ModeloProductos;