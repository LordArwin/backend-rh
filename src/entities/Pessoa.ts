import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    JoinColumn,
    ManyToOne
  } from 'typeorm';
import Cargo from './Cargo';
import Escolaridade from './Escolaridade';
  
  @Entity('pessoa')
  class Pessoa {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    tipo_pessoa: string;

    @Column()
    nome: string;

    @Column()
    status: number;

    @Column()
    email: string;

    @Column('timestamp')
    nascimento: Date;

    @PrimaryColumn()
    cpf: string;

    @Column()
    pis: string;

    @Column()
    end_logradouro: string;

    @Column()
    end_numero: string;

    @Column()
    end_cep: string;

    @Column()
    end_cidade: string;

    @Column()
    end_uf: string;

    @Column()
    end_bairro: string;

    @Column()
    sexo: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    escolaridade_id: number;

    @Column()
    cargo_id:number;

    @ManyToOne(() => Escolaridade )
    @JoinColumn({ name: 'escolaridade_id' })
    escolaridade: Escolaridade;

    @ManyToOne(() => Cargo )
    @JoinColumn({ name: 'cargo_id' })
    cargo: Cargo;

  }
  
  export default Pessoa;
  