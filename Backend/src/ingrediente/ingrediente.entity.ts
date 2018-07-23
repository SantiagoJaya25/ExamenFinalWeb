import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { ComidaEntity} from 'comida/comida.entity';

@Entity('ingrediente')
export class IngredienteEntity {

  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 100 })
  nombreIngrediente: string;

  @Column({ type: 'int'})
  cantidad: number;

  @Column({ length: 100 })
  descripcionPreparacion: string;

  @Column({ length: 50 })
  opcional: string;

  @Column({ length: 100 })
  tipoIngrediente: string;

  @Column({ length: 10 })
  necesitaRefrigeracion: string;

  @Column()
  solicitudTransferencia: boolean;

  @Column('int')
  solicitanteId: number;

  @ManyToOne(type => ComidaEntity, comida=>comida.ingredientes)
  comida:ComidaEntity;

}