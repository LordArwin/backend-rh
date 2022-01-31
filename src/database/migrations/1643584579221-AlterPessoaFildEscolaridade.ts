import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterPessoaFildEscolaridade1643584579221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'pessoa',
            new TableColumn({
              name: 'escolaridade_id',
              type: 'integer',
              isNullable: true,
            }),
          );
          await queryRunner.createForeignKey(
            'pessoa',
            new TableForeignKey({
              name: 'PessoaEscolaridade',
              columnNames: ['escolaridade_id'],
              referencedColumnNames: ['escolaridade_id'],
              referencedTableName: 'escolaridade',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('pessoa', 'PessoaEscolaridade');
        await queryRunner.dropColumn('pessoa', 'escolaridade_id');
    }

}
