import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEscolaridade1643584399053 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'escolaridade',
              columns: [
                {
                  name: 'escolaridade_id',
                  type: 'integer',
                  isPrimary: true,
                  generationStrategy: 'increment',
                  isGenerated: true,
                },
                {
                  name: 'descricao',
                  type: 'varchar',
                  isNullable: false,
                  isUnique: true
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
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('escolaridade');
    }

}
