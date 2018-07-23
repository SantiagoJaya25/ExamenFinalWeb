import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ComidaEntity} from './comida.entity';
import {ComidaService} from './comida.service';
import {ComidaController} from './comida.controller';
import {ClienteModule} from '../cliente/cliente.module';
import {ClienteService} from '../cliente/cliente.service';

@Module({
    imports: [TypeOrmModule.forFeature([ComidaEntity]), ClienteModule],
    providers: [ComidaService],
    controllers: [ComidaController],
    exports: [ComidaService],
})

export class ComidaModule{}