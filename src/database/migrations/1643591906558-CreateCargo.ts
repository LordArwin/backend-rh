import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCargo1643591906558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'cargo',
              columns: [
                {
                  name: 'id',
                  type: 'integer',
                  isPrimary: true,
                  generationStrategy: 'increment',
                  isGenerated: true,
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'cbo',
                    type: 'varchar',
                    isNullable: false
                  },
                  {
                    name: 'departamento',
                    type: 'varchar',
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
        await queryRunner.dropTable('cargo');
    }

}
