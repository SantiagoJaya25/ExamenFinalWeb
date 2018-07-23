import {Body, Controller, Get, Param, Post, UsePipes} from '@nestjs/common';
import {IngredienteService} from './ingrediente.service';
import {IngredienteEntity} from './ingrediente.entity';
//import {ActorPipe} from '../actor/actor.pipe';
//import {ACTOR_SCHEMA} from '../actor/actor.schema';

@Controller('Ingrediente')
export class IngredienteController{

    constructor(private _ingredienteService: IngredienteService){}

    @Get('listar')
    async listarTodas(): Promise<IngredienteEntity[]>{
        return this._ingredienteService.listarTodas();
    }

    @Post('crear')
    //@UsePipes(new ComidaPipe(COMIDA_SCHEMA))
    async crearUno(
        @Body('nombreIngrediente') nombreIngrediente, @Body('cantidad') cantidad, @Body('descripcionPreparacion') descripcionPreparacion,
        @Body('opcional') opcional, @Body('tipoIngrediente') tipoIngrediente,  @Body('necesitaRefrigeracion') necesitaRefrigeracion,@Body('idComida') idComida,
    ){
        return this._ingredienteService.crearUno(
            nombreIngrediente, cantidad, descripcionPreparacion, opcional, tipoIngrediente, necesitaRefrigeracion, idComida);
    }

    @Get('obtener/:id')
    async obtenerUno(@Param() paramParams): Promise<IngredienteEntity> {
        return this._ingredienteService.obtenerUno(paramParams.id);
    }

    @Post('transferir')
    async transferir(
        @Body('idIngrediente') idIngrediente, @Body('idSolicitante') idSolicitante,
    ){
        return this._ingredienteService.pedirTransferencia(idIngrediente, idSolicitante);
    }

    @Post('aceptar')
    async aceptarTransferencia(@Body('idIngrediente') idIngrediente){
        return this._ingredienteService.aceptarTrasnferencia(idIngrediente);
    }

    @Post('rechazar')
    async rechazarTransferencia(@Body('idIngrediente') idIngrediente){
        return this._ingredienteService.rechazarTrasnferencia(idIngrediente);
    }

    @Post('buscarLike')
    async buscarIngredienteLike(@Body() bodyParams){
        return this._ingredienteService.encontrarIngredienteLike(bodyParams.palabra);
    }
}