import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateEscritorioFieldNamesToPortuguese1611773975296 implements MigrationInterface {
    name = 'UpdateEscritorioFieldNamesToPortuguese1611773975296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "escritorio" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "escritorio" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "escritorio" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "escritorio" ADD "nome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "escritorio" ADD "descricao" character varying`);
        await queryRunner.query(`ALTER TABLE "escritorio" ADD "ativo" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "escritorio" DROP COLUMN "ativo"`);
        await queryRunner.query(`ALTER TABLE "escritorio" DROP COLUMN "descricao"`);
        await queryRunner.query(`ALTER TABLE "escritorio" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "escritorio" ADD "active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "escritorio" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "escritorio" ADD "name" character varying NOT NULL`);
    }

}
