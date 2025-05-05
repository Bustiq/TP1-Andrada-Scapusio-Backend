import { Model } from "sequelize";

export class Producto {
    id: Number;
    nombre: string;
    precio: Number;
    enStock: Boolean;
    
    constructor(id: Number, nombre: string, precio: Number, enStock : boolean) {
      this.id = id
      this.nombre = nombre
      this.precio = precio
      this.enStock = enStock
    }
}