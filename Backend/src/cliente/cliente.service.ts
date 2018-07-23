import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {ClienteEntity} from './cliente.entity';
import {InjectRepository} from '@nestjs/typeorm';
//import {ComidaService} from '../comida/comida.service';
import {ComidaEntity} from '../comida/comida.entity';

@Injectable()
export class ClienteService{

    constructor(
        @InjectRepository(ClienteEntity)
        private readonly _clienteRepositorio: Repository<ClienteEntity>,
        // private _actorService: ActorService,
    ){}

    async mostrarTodosLosClientes(): Promise<ClienteEntity[]>{
        return await this._clienteRepositorio.find({ order: { nombreCliente: 'ASC'} });
    }

    async mostrarComidasPorCliente(idCliente){
        return this._clienteRepositorio.find({
            relations: ['cliente'],
            where: {id: idCliente},
        });
    }

    // async listarUsuarioTodo(idUsuario){
    //     const actoresUsuario = await this.listarPorUsuario(idUsuario);
    //     return this._actorService.listarPeliculasUnActor(actoresUsuario.id);
    // }

    async crearNuevoCliente(nombre, apellido, correo, password, url_foto_cliente){
        const cliente = new ClienteEntity();
        cliente.nombreCliente = nombre;
        cliente.apellidoCliente = apellido;
        cliente.correoCliente = correo;
        cliente.passwordCliente = password;
        cliente.urlCliente = url_foto_cliente;

        return await this._clienteRepositorio.save(cliente);
    }

    async obtenerUno(id: number): Promise<ClienteEntity>{
        return await this._clienteRepositorio.findOne(id);
    }

    async verificarExiste(correo, password){
        return await this._clienteRepositorio.findOne({
            where: {
                correo: 'correo',
                password: 'password',
            },
        });
    }

    async buscarComida(palabra: string){
        return await this._clienteRepositorio
            .createQueryBuilder('cliente')
            .where('upper(cliente.nombre) like :palabra', {palabra: '%' + palabra + '%'})
            .orWhere('upper(cliente.apellido) like :palabra', {palabra: '%' + palabra + '%'})
            .getMany();
    }

}

// export class Usuario{
//     constructor(
//         public nombre: string,
//         public apellido: string,
//         public correo: string,
//         public password: string,
//         public url_foto_user: string,
//     ){
//
//     }
// }