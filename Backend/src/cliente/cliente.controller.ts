import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ClienteEntity} from './cliente.entity';
import {ClienteService} from './cliente.service';

@Controller('Cliente')
export class ClienteController{

    constructor(private _clienteService: ClienteService){}

    @Get('listarClientes')
    async listarTodosClientes(){
        return this._clienteService.mostrarTodosLosClientes();
    }

    @Get('mostrarPorComida/:id')
    async mostrarElementosCliente(@Param() paramParams){
        return this._clienteService.mostrarComidasPorCliente(paramParams.id);
    }

    // @Get('listarUsuarioTodo/:id')
    // async listarUsuarioTodo(@Param() paramParams){
    //     return this._usuarioService.listarUsuarioTodo(paramParams.id);
    // }

    @Get('obtener/:id')
    async obtenerUno(@Param() paramParams): Promise<ClienteEntity> {
        return this._clienteService.obtenerUno(paramParams.id);
    }

    @Post('crear')
    async crearNuevoCli(
        @Body('nombre') nombre, @Body('apellido') apellido, @Body('correo') correo,
        @Body('password') password, @Body('url_foto') url_foto,
    ){
        return this._clienteService.crearNuevoCliente(nombre, apellido, correo, password, url_foto);
    }

    @Post('buscarcliente')
    async buscarClientes(@Body('palabra') palabra){
        return this._clienteService.buscarComida(palabra);
    }
}