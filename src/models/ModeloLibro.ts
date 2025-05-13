import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class ModeloLibro extends Model {
    public id!: number;
    public autor! : string;
    public titulo!: string;
    public paginas!: number;
}   

ModeloLibro.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      autor: {
        type: DataTypes.STRING,
      },
      titulo: {
        type: DataTypes.STRING,
      },
      paginas: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Libro',
    }
  );

  export default ModeloLibro;