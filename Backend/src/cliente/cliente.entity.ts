import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import{ ComidaEntity } from '../comida/comida.entity'
@Entity('cliente')
export class ClienteEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 100 })
  nombreCliente: string;

  @Column({ length: 100 })
  apellidoCliente: string;

  @Column({ length: 100 })
  correoCliente: string;
  
  @Column({ length: 100 })
  passwordCliente: string;

  @Column({ length: 500 })
  urlCliente: string;

  @OneToMany(type => ComidaEntity, comida => comida.cliente)
  comidas:ComidaEntity[];

}