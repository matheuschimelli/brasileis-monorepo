import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeNumeroDoProcessoParaUnico1610585491204 implements MigrationInterface {
    name = 'ChangeNumeroDoProcessoParaUnico1610585491204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jurisprudence" ALTER COLUMN "numeroProcesso" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "jurisprudence"."numeroProcesso" IS NULL`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD CONSTRAINT "UQ_341d643f06a01dca8097673beb0" UNIQUE ("numeroProcesso")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP CONSTRAINT "UQ_341d643f06a01dca8097673beb0"`);
        await queryRunner.query(`COMMENT ON COLUMN "jurisprudence"."numeroProcesso" IS NULL`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ALTER COLUMN "numeroProcesso" DROP NOT NULL`);
    }

}
