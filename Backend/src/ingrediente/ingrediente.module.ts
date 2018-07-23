import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from '@nestjs/common';
import {IngredienteEntity} from './ingrediente.entity';
import {IngredienteService} from './ingrediente.service';
import {IngredienteController} from './ingrediente.controller';
import {ComidaModule} from '../comida/comida.module';
import {ClienteModule} from '../cliente/cliente.module';

@Module({
    imports: [TypeOrmModule.forFeature([IngredienteEntity]), ComidaModule, ClienteModule],
    providers: [IngredienteService],
    controllers: [IngredienteController],
})

export class IngredienteModule{}