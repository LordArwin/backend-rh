import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from 'typeorm';
  
  @Entity('escolaridade')
  class Escolaridade {
    @PrimaryGeneratedColumn('increment')
    escolaridade_id: number;

    @Column()
    descricao: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  
  export default Escolaridade;
  