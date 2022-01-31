import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('cargo')
  class Cargo {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    descricao: string;
    @Column()
    cbo:string;
    @Column()
    departamento:string;
    @CreateDateColumn()
    createdAt: Date;  
    @UpdateDateColumn()
    updatedAt: Date;
    @Column()
    status: number;

  }
  
  export default Cargo;
  