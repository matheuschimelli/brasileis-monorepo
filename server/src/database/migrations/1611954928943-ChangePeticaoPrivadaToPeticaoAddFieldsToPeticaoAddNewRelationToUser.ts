import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangePeticaoPrivadaToPeticaoAddFieldsToPeticaoAddNewRelationToUser1611954928943 implements MigrationInterface {
    name = 'ChangePeticaoPrivadaToPeticaoAddFieldsToPeticaoAddNewRelationToUser1611954928943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "peticao_privada_allow_access_to_user" ("peticaoPrivadaId" uuid NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_85517770a85f6c8eaf2f1e2fb2f" PRIMARY KEY ("peticaoPrivadaId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0a767a0659fbd3d1c4ef874d07" ON "peticao_privada_allow_access_to_user" ("peticaoPrivadaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bcb5a8d75fedf9d53a45d5c0c9" ON "peticao_privada_allow_access_to_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD "header" character varying`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD "footer" character varying`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD "private" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD "ownerId" integer`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD CONSTRAINT "FK_148d19479eb765a11482fc535ac" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "peticao_privada_allow_access_to_user" ADD CONSTRAINT "FK_0a767a0659fbd3d1c4ef874d07a" FOREIGN KEY ("peticaoPrivadaId") REFERENCES "peticao_privada"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "peticao_privada_allow_access_to_user" ADD CONSTRAINT "FK_bcb5a8d75fedf9d53a45d5c0c90" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peticao_privada_allow_access_to_user" DROP CONSTRAINT "FK_bcb5a8d75fedf9d53a45d5c0c90"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada_allow_access_to_user" DROP CONSTRAINT "FK_0a767a0659fbd3d1c4ef874d07a"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP CONSTRAINT "FK_148d19479eb765a11482fc535ac"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP COLUMN "private"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP COLUMN "footer"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP COLUMN "header"`);
        await queryRunner.query(`DROP INDEX "IDX_bcb5a8d75fedf9d53a45d5c0c9"`);
        await queryRunner.query(`DROP INDEX "IDX_0a767a0659fbd3d1c4ef874d07"`);
        await queryRunner.query(`DROP TABLE "peticao_privada_allow_access_to_user"`);
    }

}
