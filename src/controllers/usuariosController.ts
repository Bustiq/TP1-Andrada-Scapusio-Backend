import {createHash} from 'crypto'
import {Sequelize} from 'sequelize'
import {Usuario} from '../models/usuario'

const secret = "Medibuster"
const sequelize = new Sequelize('productos', 'alumno', 'alumnoipm', {
    host: 'localhost',
    dialect: 'mysql'
});

export async function VerificarConexionUsuarios(){
    try {
        await sequelize.authenticate();
        console.log('Connection successful (Usuarios Controller).');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export async function SincronizarUsuarios() {
    await sequelize.sync()
}


/*
export class UsuariosController{

   

    static async GetUsuarios()
    {
        let productos: Usuario[] = []
        let resultado = await sequelize.models.modeloUsuario.findAll()


        resultado.forEach((producto: any) => {
            productos.push(new Usuario(producto.id, producto.nombre, producto.precio, producto.enStock))
        })


        return productos
    }



    static async GetProductoById(_id: number) : Promise<Usuario>     
    {      
        if (!await this.ContainsId(_id))
        {                 
            throw new Error("No existe un producto con ese id")
        }        
        
        let resultado: Usuario = new Usuario(-1, "Error", "asasa", true);
        sequelize.models.modeloUsuario.findbyPk(_id).then((producto: any) => {             
            resultado = new Usuario(producto.id, producto.nombre, producto.precio, producto.enStock)         
        }).catch((error: any) => {             
            console.log("Error: " + error)
        })         
        console.log("haciendo return supongo")         
        console.log("resultado: " + resultado.nombreDeUsuario)         
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
        
        (await this.GetUsuarios()).forEach((Usuario) => {
            if (Number(Usuario.id) > highestId)
            {
                highestId = Number(Usuario.id)
            }
        })
        console.log("productos: " + this.GetUsuarios)
        return Number(highestId) + 1
    }


    static async ContainsId(_id:number): Promise<boolean>
    {


        let resultado: Usuario = new Usuario (-1, "Error", "asd", false);
        sequelize.models.modeloUsuario.findbyPk(_id).then((producto: any) => {             
            resultado = new Usuario(producto.id, producto.nombre, producto.precio, producto.enStock)         
        }).catch((error: any) => {             
            
        })         
        
        return resultado.nombreDeUsuario != "Error"

    }

}*/