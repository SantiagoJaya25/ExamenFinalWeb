import {Body, Controller, Get, Param, Post, Put, UsePipes} from '@nestjs/common';
import {ComidaService} from './comida.service';
import {ComidaEntity} from './comida.entity';
//import {ComidaPipe} from "./comida.pipe";
//import {COMIDA_SCHEMA} from "./comida.schema";

@Controller('Comida')
export class ComidaController{
    constructor(private _comidaService: ComidaService) {
    }

    @Get('listar')
    async listarTodos(){
        return this._comidaService.listarComidas();
    }

    @Get('listarIngredientes/:id')
    async listarComidasPorClientes(@Param() paramParams){
        return this._comidaService.listarComidas
    }

    @Post('crear')
    async crearUno (
        @Body('nombrePlato') nombrePlato, @Body('descripcionPlato') descripcionPlato, @Body('nacionalidad') nacionalidad,
        @Body('numeroPersonas') numeroPersonas, @Body('picante') picante, @Body('url_foto') url_foto,
        @Body('idCliente') idCliente
    ){
        return this._comidaService.crearUno(
            nombrePlato, descripcionPlato, nacionalidad, numeroPersonas, picante, url_foto, idCliente);
    }

    @Get('obtener/:id')
    async obtenerUno(@Param() paramParams): Promise<ComidaEntity> {
        return this._comidaService.obtenerUno(paramParams.id);
    }


    @Post('buscarLike')
    async encontrarComidasLike(@Body('palabra') palabra){
        return this._comidaService.encontrarComidasLike(palabra);
    }

}