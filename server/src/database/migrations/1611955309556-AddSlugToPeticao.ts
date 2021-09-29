import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSlugToPeticao1611955309556 implements MigrationInterface {
    name = 'AddSlugToPeticao1611955309556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD "slug" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD CONSTRAINT "UQ_d2f60dc8390dabf873d1ab5079d" UNIQUE ("slug")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP CONSTRAINT "UQ_d2f60dc8390dabf873d1ab5079d"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP COLUMN "slug"`);
    }

}
