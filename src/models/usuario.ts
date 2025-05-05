import { Table, Column, Model, DataType, AutoIncrement } from 'sequelize-typescript';

@Table({
    tableName: 'usuarios',

})
export class Usuario extends Model {
    
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    })
    id !: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombreDeUsuario !: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    hashedPass !: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    esAdmin !: boolean;

    constructor(id: number, nombreDeUsuario: string, hashedPass: string, esAdmin: boolean) {
        super();
        this.id = id;
        this.nombreDeUsuario = nombreDeUsuario;
        this.hashedPass = hashedPass;
        this.esAdmin = esAdmin;
    }
}