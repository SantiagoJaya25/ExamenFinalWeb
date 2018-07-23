import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {IngredienteService} from './ingrediente/ingrediente.service';
import {Connection} from 'typeorm'; 
import {ClienteService} from './cliente/cliente.service';
import {ComidaModule} from './comida/comida.module';
import {ClienteModule} from './cliente/cliente.module';
import {IngredienteModule} from './ingrediente/ingrediente.module';
//import {AutorizacionController} from './autorizacion.controller';
import {ClienteEntity} from './cliente/cliente.entity';
import {ComidaEntity} from './comida/comida.entity';
import {IngredienteEntity} from './ingrediente/ingrediente.entity';
import {ComidaService} from './comida/comida.service';
import {ClienteController} from './cliente/cliente.controller';
//import {PeticionModule} from './peticion/peticion.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'examenFinal',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      // TypeOrmModule.forFeature([UsuarioEntity, ActorEntity, PeliculaEntity]),
      ComidaModule,
      ClienteModule,
      IngredienteModule,
      //PeticionModule,
  ],
  //controllers: [AppController, AutorizacionController],
  providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
