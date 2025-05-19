import ModeloProductos from '../models/ModeloProducto';




export  class controllerProducto{
    static async devolverTodosLosProductos(){
        console.log("Devolviendo todos los productos")
        return await ModeloProductos.findAll();
    }

    static async devolverUnProducto(idRecibido : number){
        const producto = await ModeloProductos.findOne(
            {where : {id :idRecibido}}
        );
        return producto;
    }

    static async crearProducto(_nombre : string, _precio : number, _stock : number){
        const producto = await ModeloProductos.create(
            {
                nombre : _nombre,
                precio : _precio,
                stock : _stock
            }
        );
        return producto;
    }

    static async updetearProducto(idRecibido : number, _nombre : string, _precio : number, _stock : number){
        const producto = await ModeloProductos.update({
            nombre : _nombre,
            precio : _precio,
            stock : _stock
        }, { where : {id : idRecibido}})
        return producto;
    }

    static async deletearProducto(idRecibido : number){
        const producto = await ModeloProductos.destroy({ where : {id : idRecibido}})
        return producto;
    }
}



