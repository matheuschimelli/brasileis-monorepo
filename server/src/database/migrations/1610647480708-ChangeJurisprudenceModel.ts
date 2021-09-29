import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeJurisprudenceModel1610647480708 implements MigrationInterface {
    name = 'ChangeJurisprudenceModel1610647480708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP CONSTRAINT "UQ_341d643f06a01dca8097673beb0"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "numeroProcesso"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "dataDecisao"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "titulo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "recursoNome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "siglaTribunal" character varying`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "dataJulgamento" date`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "dataPublicacao" date`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "codigoProcesso" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD CONSTRAINT "UQ_8898ee7ba252c5af73550f7b91e" UNIQUE ("codigoProcesso")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP CONSTRAINT "UQ_8898ee7ba252c5af73550f7b91e"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "codigoProcesso"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "dataPublicacao"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "dataJulgamento"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "siglaTribunal"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "recursoNome"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP COLUMN "titulo"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "dataDecisao" date`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "numeroProcesso" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD CONSTRAINT "UQ_341d643f06a01dca8097673beb0" UNIQUE ("numeroProcesso")`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD "title" character varying NOT NULL`);
    }

}
