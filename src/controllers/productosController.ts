import { Producto } from '../models/producto'
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('productos', 'alumno', 'alumnoipm', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.define(
    'modeloProducto',
    {

      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      precio:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      enStock:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
    {
        tableName: 'Producto',
        timestamps: false,
    },
);


export async function VerificarConexionProductos(){
    try {
        await sequelize.authenticate();
        console.log('Connection successful (Productos Controller)');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export async function SincronizarProductos() {
    await sequelize.sync()
}


export class ProductoController{

   

    static async GetProductos()
    {
        let productos: Producto[] = []
        let resultado = await sequelize.models.modeloProducto.findAll()


        resultado.forEach((producto: any) => {
            productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.enStock))
        })


        return productos
    }



    static async GetProductoById(_id: number) : Promise<Producto>     
    {      
        if (!await this.ContainsId(_id))
        {                 
            throw new Error("No existe un producto con ese id")
        }        
        
        let resultado: Producto = new Producto(-1, "Error", -1, false);
        sequelize.models.modeloProducto.findbyPk(_id).then((producto: any) => {             
            resultado = new Producto(producto.id, producto.nombre, producto.precio, producto.enStock)         
        }).catch((error: any) => {             
            console.log("Error: " + error)
        })         
        console.log("haciendo return supongo")         
        console.log("resultado: " + resultado.nombre)         
        return resultado     
    }

    static async PostProducto(_nombre : string, _precio : number, _enStock : boolean)
    {

        await sequelize.models.modeloProducto.create({id: await this.GetUnusedId(), nombre: _nombre, precio: _precio, enStock: _enStock})
    }

    static async DeleteProducto(_id: number)
    {

        if (!await this.ContainsId(_id))
        {
            throw new Error("No existe un producto con ese id")
            
        }

        await sequelize.models.modeloProducto.destroy({
            where: {
                id: _id
            }
            
        })
    }

    static async PutProducto(_id: number, _nombre : string, _precio : Number, _enStock : boolean)
    {
        if (!await this.ContainsId(_id))
        {
           throw new Error("No existe un producto con ese id")
        }


        await sequelize.models.modeloProducto.update({nombre: _nombre, precio: _precio, enStock: _enStock}, {
            where: {
                id: _id
            }
        })
      
    }

    static async GetUnusedId(): Promise<number>{
        let highestId: number = -1;
        
        (await this.GetProductos()).forEach((producto) => {
            if (Number(producto.id) > highestId)
            {
                highestId = Number(producto.id)
            }
        })
        console.log("productos: " + this.GetProductos)
        return Number(highestId) + 1
    }


    static async ContainsId(_id:number): Promise<boolean>
    {


        let resultado: Producto = new Producto(-1, "Error", -1, false);
        sequelize.models.modeloProducto.findbyPk(_id).then((producto: any) => {             
            resultado = new Producto(producto.id, producto.nombre, producto.precio, producto.enStock)         
        }).catch((error: any) => {             
            
        })         
        
        return resultado.nombre != "Error"

    }

}









