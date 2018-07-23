import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {IngredienteEntity} from './ingrediente.entity';
import {Repository} from 'typeorm';
import {ComidaService} from '../comida/comida.service';
import {ClienteService} from '../cliente/cliente.service';
import {ComidaEntity} from '../comida/comida.entity';

@Injectable()
export class IngredienteService{

    constructor(
        @InjectRepository(IngredienteEntity)
        private readonly _ingredienteRepositorio: Repository<IngredienteEntity>,
        private _comidaService: ComidaService,
        private _clienteService: ClienteService,
    ){}

    async listarTodas(): Promise<IngredienteEntity[]> {
        return await this._ingredienteRepositorio.find({ order:{nombreIngrediente:'ASC'}});
    }

    async crearUno(
        nombreIngrediente, cantidad, descripcionPreparacion, opcional,tipoIngrediente, necesitaRefrigeracion, idComida): Promise<IngredienteEntity>{
        const ingrediente = new IngredienteEntity();
        ingrediente.nombreIngrediente = nombreIngrediente;
        ingrediente.cantidad = cantidad;
        ingrediente.descripcionPreparacion = descripcionPreparacion;
        ingrediente.opcional = opcional;
        ingrediente.tipoIngrediente = tipoIngrediente;
        ingrediente.necesitaRefrigeracion = necesitaRefrigeracion;
        ingrediente.solicitudTransferencia = false;
        ingrediente.solicitanteId = 0;
        

        const comida = await this._comidaService.obtenerUno(idComida);
        ingrediente.comida = comida;
        return await this._ingredienteRepositorio.save(ingrediente);
    }

    async obtenerUno(id: number): Promise<IngredienteEntity>{
        return await this._ingredienteRepositorio.findOne(id);
    }

    async eliminar(ingrediente){
        await this._ingredienteRepositorio.remove(ingrediente);
    }

    async pedirTransferencia(idIngrediente: number, idSolicitante: number){
        const ingrediente = await this._ingredienteRepositorio.findOne(
            {
                where: {
                    id: idIngrediente,
                    solicitudTransferencia: false,
                },
            },
        );
        ingrediente.solicitudTransferencia = true;
        ingrediente.solicitanteId = idSolicitante;

        return await this._ingredienteRepositorio.save(ingrediente);
    }

    async aceptarTrasnferencia(idIngrediente: number){
        const ingrediente = await this._ingredienteRepositorio.findOne(
                {
                    where: {
                        id: idIngrediente,
                        solicitudTransferencia: true,
                    },
                },
            );
        const idClienteSolicitante = ingrediente.solicitanteId;
        const comida = await this._comidaService.obtenerUno(idClienteSolicitante);
        ingrediente.solicitudTransferencia = false;
        ingrediente.solicitanteId = 0;
        ingrediente.comida = comida;
        return await this._ingredienteRepositorio.save(ingrediente);

    }

    async rechazarTrasnferencia(idIngrediente: number){
        const ingrediente = await this._ingredienteRepositorio.findOne(
            {
                where: {
                    id: idIngrediente,
                    solicitudTransferencia: true,
                },
            },
        );
        ingrediente.solicitudTransferencia = false;
        ingrediente.solicitanteId = 0;
        return await this._ingredienteRepositorio.save(ingrediente);

    }

    async encontrarIngredienteLike(palabra: string){
        return await this._ingredienteRepositorio
            .createQueryBuilder('ingrediente')
            .where('upper(ingrediente.nombre) like :palabra', {palabra: '%' + palabra + '%'})
            .getMany();
    }
}

// export class Pelicula{
//     constructor(
//         public idPelicula: number,
//         public nombre: string,
//         public anioLanzamiento: number,
//         public rating: number,
//         public actoresPrincipales: string,
//         public sinopsis: string,
//         public actorId: number
//     ){}
// }