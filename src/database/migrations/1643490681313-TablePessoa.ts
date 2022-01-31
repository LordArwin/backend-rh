import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TablePessoa1643490681313 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'pessoa',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'tipo_pessoa',
                type: 'char',
                isNullable: false,
              },
              {
                name: 'nome',
                type: 'varchar',
                isNullable: false
              },
              {
                name: 'email',
                type: 'varchar',
                isNullable: false
              },
              {
                name: 'nascimento',
                type: 'date',
                isNullable: false,
              },
              {
                name: 'cpf',
                type: 'varchar',
                isPrimary: true,
                isNullable: false,
              },
              {
                name: 'pis',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'end_logradouro',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'end_numero',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'end_cep',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'end_cidade',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'end_uf',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'end_bairro',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'sexo',
                type: 'char',
                isNullable: false,
              },
              {
                name: 'createdAt',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updatedAt',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'status',
                type: 'integer',
                isNullable: false,
                default: 1
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pessoa');
      }
}
