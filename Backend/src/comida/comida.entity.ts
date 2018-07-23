import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import{ ClienteEntity } from '../cliente/cliente.entity';
import {IngredienteEntity} from '../ingrediente/ingrediente.entity';

@Entity('comida')
export class ComidaEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 50 })
  nombrePlato: string;

  @Column({ length: 100 })
  descripcionPlato: string;

  @Column({ length: 20 })
  nacionalidad: string;

  @Column({ type:'int' })
  numeroPersonas: number;

  @Column({ length: 10 })
  picante: string;

  @Column('varchar', {length: 50})
  url_foto_comida: string;

  @ManyToOne(type => ClienteEntity, cliente =>cliente.comidas)
  cliente:ClienteEntity;

  @OneToMany(type => IngredienteEntity, ingrediente=>ingrediente.comida)
  ingredientes:IngredienteEntity[];

}