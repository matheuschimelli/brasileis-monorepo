import {MigrationInterface, QueryRunner} from "typeorm";

export class RenamePeticaoPrivadaToPeticao1611971007971 implements MigrationInterface {
    name = 'RenamePeticaoPrivadaToPeticao1611971007971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "peticao" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying NOT NULL, "slug" character varying NOT NULL, "content" character varying, "textContent" character varying, "header" character varying, "footer" character varying, "private" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "escritorioId" uuid, "processoId" uuid, "ownerId" integer, CONSTRAINT "UQ_6579d38e04facb342c9c734af2f" UNIQUE ("slug"), CONSTRAINT "PK_b305f34cad35c4193b9bd816e5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "peticao_allow_access_to_user" ("peticaoId" uuid NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_3e8d96f795ce2aa5f34695da925" PRIMARY KEY ("peticaoId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_71a94dc010374f8965e4be5f42" ON "peticao_allow_access_to_user" ("peticaoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_39bc1ec6b510d1ef9bc9c2e3d5" ON "peticao_allow_access_to_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "peticao" ADD CONSTRAINT "FK_2438ad7395a316e382522f29ee4" FOREIGN KEY ("escritorioId") REFERENCES "escritorio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "peticao" ADD CONSTRAINT "FK_06f32b385db2b2cfc63acf12bc0" FOREIGN KEY ("processoId") REFERENCES "processo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "peticao" ADD CONSTRAINT "FK_5abe344cb2797429d2cfd537241" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "peticao_allow_access_to_user" ADD CONSTRAINT "FK_71a94dc010374f8965e4be5f422" FOREIGN KEY ("peticaoId") REFERENCES "peticao"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "peticao_allow_access_to_user" ADD CONSTRAINT "FK_39bc1ec6b510d1ef9bc9c2e3d5a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peticao_allow_access_to_user" DROP CONSTRAINT "FK_39bc1ec6b510d1ef9bc9c2e3d5a"`);
        await queryRunner.query(`ALTER TABLE "peticao_allow_access_to_user" DROP CONSTRAINT "FK_71a94dc010374f8965e4be5f422"`);
        await queryRunner.query(`ALTER TABLE "peticao" DROP CONSTRAINT "FK_5abe344cb2797429d2cfd537241"`);
        await queryRunner.query(`ALTER TABLE "peticao" DROP CONSTRAINT "FK_06f32b385db2b2cfc63acf12bc0"`);
        await queryRunner.query(`ALTER TABLE "peticao" DROP CONSTRAINT "FK_2438ad7395a316e382522f29ee4"`);
        await queryRunner.query(`DROP INDEX "IDX_39bc1ec6b510d1ef9bc9c2e3d5"`);
        await queryRunner.query(`DROP INDEX "IDX_71a94dc010374f8965e4be5f42"`);
        await queryRunner.query(`DROP TABLE "peticao_allow_access_to_user"`);
        await queryRunner.query(`DROP TABLE "peticao"`);
    }

}
