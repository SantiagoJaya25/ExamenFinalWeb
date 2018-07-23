import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {ComidaEntity} from './comida.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {ClienteService} from '../cliente/cliente.service';
import {IngredienteEntity} from '../ingrediente/ingrediente.entity';
import {ClienteEntity} from '../cliente/cliente.entity';
//import {IngredienteService} from '../ingrediente/ingrediente.service';

@Injectable()
export class ComidaService{

    constructor(
        @InjectRepository(ComidaEntity)
        private readonly _comidaRepositorio: Repository<ComidaEntity>,
        private _clienteService: ClienteService,
    ){}

    async listarComidas(): Promise<ComidaEntity[]>{
        return await this._comidaRepositorio.find({order:{nombrePlato: 'ASC'} });
    }

    async listarComidasIngredientes(idComida){
        return this._comidaRepositorio.find({
            
            relations: ['ingredientes'],
            where: {
                id: idComida},
            order: {
                nombrePlato: 'ASC',
            },
        });
    }

    async obtenerIngredientesPorComida(id){
        return await this._comidaRepositorio.findOne(id, {relations: ['peliculas']});
    }

    async crearUno(nombrePlato, descripcionPlato, nacionalidad, numeroPersonas, picante, url_foto, idCliente){
        const comida = new ComidaEntity();
        comida.nombrePlato = nombrePlato;
        comida.descripcionPlato = descripcionPlato;
        comida.nacionalidad = nacionalidad;
        comida.numeroPersonas = numeroPersonas;
        comida.picante = picante;
        comida.url_foto_comida = url_foto;

        // busco al usuario para agregar relacion FK
        const cliente = await this._clienteService.obtenerUno(idCliente);
        comida.cliente = cliente;
    

        await this._comidaRepositorio.save(comida);
    }

    async obtenerUno(id: number): Promise<ComidaEntity>{
        return await this._comidaRepositorio.findOne(id);
    }

    async encontrarComidasLike(palabra: string){
        return await this._comidaRepositorio
            .createQueryBuilder('actor')
            .where('upper(cliente.nombres) like :palabra', {palabra: '%' + palabra + '%'})
            .orWhere('upper(cliente.apellidos) like :palabra', {palabra: '%' + palabra + '%'})
            .getMany();

    }

}

// export class Actor{
//     constructor(
//         public nombres: string,
//         public apellidos: string,
//         public fechaNacimiento: Date,
//         public numeroPeliculas: number,
//         public retirado: boolean,
//         public url_foto:string
//     ){}
// }