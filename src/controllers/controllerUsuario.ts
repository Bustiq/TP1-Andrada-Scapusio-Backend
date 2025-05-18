
import ModeloUsuario from '../models/ModeloUsuario';
import { createHash } from 'crypto';
import jwt, { JwtPayload } from 'jsonwebtoken'



export  class controllerUsuario{
    

    static secretKey = "Medieburger"


    static hashSHA256(data: string): string {

        return createHash('sha256').update(data).digest('hex');
    }


    static generarJWT(payload: any): string {
        const token = jwt.sign(payload, controllerUsuario.secretKey);
        return token;
    }


    static async crearUsuario(_nombre : string, _password : string){
        
        _password = controllerUsuario.hashSHA256(_password)
        const usuario = await ModeloUsuario.create(
            {
                nombre : _nombre,
                password : _password
            }
        );
    }

    static async signUp(_nombre : string, _password : string){

        const usuarioAnt = await ModeloUsuario.findOne(
            {where : {nombre :_nombre}}
        );



        if (!usuarioAnt){
            console.log("creando usuario")
            const usuario =  controllerUsuario.crearUsuario(_nombre, _password);
        }
        else{
            throw new Error("El usuario ya existe")
        }
    }

    static async login(nombreUsuario : string, password : string){

        const usuario = await ModeloUsuario.findOne(
            {where : {nombre : nombreUsuario}}
        )

        if (usuario){
            if (controllerUsuario.hashSHA256(password) == usuario.password){
                

                const payload = {
                    "nombre" : usuario.nombre,
                    "password" : password
                }
                
                console.log(payload)
                
                console.log(controllerUsuario.generarJWT(payload))
                return controllerUsuario.generarJWT(payload)

            }else
            {
                throw new Error("Contraseña incorrecta")
            }
        }
        else{
            throw new Error("Usuario no encontrado")
        }

    }


    static async autenticar(token : any) : Promise<boolean>{
        let payload = null
        try{
            payload = jwt.verify(token, this.secretKey)
        }
        catch{
            return false
        }



        const usuario = await ModeloUsuario.findOne(
            {where : {nombre : (payload as JwtPayload).nombre}}
        )
        
        if (usuario){
            return true
        }
        else{
            return false
        }
    
    }




    static async GetUsuarios()
    {
        return await ModeloUsuario.findAll()
    }


}



