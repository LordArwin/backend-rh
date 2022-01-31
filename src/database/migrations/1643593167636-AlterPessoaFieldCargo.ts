import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterPessoaFieldCargo1643593167636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'pessoa',
            new TableColumn({
              name: 'cargo_id',
              type: 'integer',
              isNullable: true,
            }),
          );
          await queryRunner.createForeignKey(
            'pessoa',
            new TableForeignKey({
              name: 'PessoaCargo',
              columnNames: ['cargo_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'cargo',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pessoa', 'PessoaCargo');
        await queryRunner.dropColumn('pessoa', 'cargo_id');
    }
}
