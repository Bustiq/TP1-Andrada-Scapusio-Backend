import fs from 'fs';
import ModeloLibro from '../models/ModeloLibro';
import { forEachChild } from 'typescript';



export  class controllerLibro{
    static async devolverTodosLosLibros(){
        const libros = await ModeloLibro.findAll();
        return libros;
    }

    static async devolverUnLibro(idRecibido : number){
        const libro = await ModeloLibro.findOne(
            {where : {id :idRecibido}}
        );
        return libro;
    }

    static async crearLibro(body : any){
        const libro = await ModeloLibro.create(
            body
        );
        return libro;
    }

    static async updetearLibro(body : any){
        const libro = await ModeloLibro.update(body, { where : {id : body.id}})
        return libro;
    }

    static async deletearLibro(body : any){
        const libro = await ModeloLibro.destroy({ where : {id : body.id}})
        return libro;
    }
}



