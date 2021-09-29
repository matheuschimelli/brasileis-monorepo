import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSomeFieldsToLawModel1611420512115 implements MigrationInterface {
    name = 'AddSomeFieldsToLawModel1611420512115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "diario_oficial" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "parentUrl" character varying, "titulo" character varying NOT NULL, "recursoNome" character varying NOT NULL, "htmlContent" character varying, "textContent" character varying NOT NULL, "contentHtmlSelector" character varying, "updateDiff" character varying, "published" boolean NOT NULL DEFAULT true, "esId" character varying, "tribunal" character varying, "siglaTribunal" character varying, "orgaoJulgador" character varying, "dataJulgamento" date, "dataPublicacao" date, "tipo" character varying, "classe" character varying, "codigoProcesso" character varying NOT NULL, "unidadeFederativa" character varying, "relator" character varying, "decisao" character varying, "ementa" character varying, "recorrente" character varying, "recorrido" character varying, "relatorio" character varying, "acordao" character varying, "juiz" character varying, "advogados" character varying, "advogadosReu" character varying, "slug" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "crawlerId" integer, CONSTRAINT "UQ_294117b97462a03c9a3df4af7ec" UNIQUE ("url"), CONSTRAINT "UQ_dd7cd8553c400de045a57cdc9bc" UNIQUE ("codigoProcesso"), CONSTRAINT "UQ_02b0e8a4e3dc0594cbb7302ca3a" UNIQUE ("slug"), CONSTRAINT "PK_a30153f84b72a4ed5eac8cd63a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "diario_oficial_categories_category" ("diarioOficialId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_85d510e7a0f0e4d8fdb476e54ea" PRIMARY KEY ("diarioOficialId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3d7207dc5d93b1e8f8cc1ac34c" ON "diario_oficial_categories_category" ("diarioOficialId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5d5692a81d0aa6e2b2a4c501fa" ON "diario_oficial_categories_category" ("categoryId") `);
        await queryRunner.query(`CREATE TABLE "diario_oficial_sub_categories_sub_category" ("diarioOficialId" integer NOT NULL, "subCategoryId" integer NOT NULL, CONSTRAINT "PK_80370693ab0d41597f93f55e062" PRIMARY KEY ("diarioOficialId", "subCategoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0d8a506055cd124fe5adb17e20" ON "diario_oficial_sub_categories_sub_category" ("diarioOficialId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0f02729944f9f9936acebcd018" ON "diario_oficial_sub_categories_sub_category" ("subCategoryId") `);
        await queryRunner.query(`ALTER TABLE "law" ADD "tipo" character varying`);
        await queryRunner.query(`ALTER TABLE "law" ADD "numero" character varying`);
        await queryRunner.query(`ALTER TABLE "law" ADD "orgao" character varying`);
        await queryRunner.query(`ALTER TABLE "law" ADD "dataPublicacao" date`);
        await queryRunner.query(`ALTER TABLE "law" ADD "ementa" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD CONSTRAINT "FK_91720d1756e1d171b53af06ac4c" FOREIGN KEY ("crawlerId") REFERENCES "crawler"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "diario_oficial_categories_category" ADD CONSTRAINT "FK_3d7207dc5d93b1e8f8cc1ac34c9" FOREIGN KEY ("diarioOficialId") REFERENCES "diario_oficial"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "diario_oficial_categories_category" ADD CONSTRAINT "FK_5d5692a81d0aa6e2b2a4c501fa4" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "diario_oficial_sub_categories_sub_category" ADD CONSTRAINT "FK_0d8a506055cd124fe5adb17e202" FOREIGN KEY ("diarioOficialId") REFERENCES "diario_oficial"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "diario_oficial_sub_categories_sub_category" ADD CONSTRAINT "FK_0f02729944f9f9936acebcd018e" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diario_oficial_sub_categories_sub_category" DROP CONSTRAINT "FK_0f02729944f9f9936acebcd018e"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial_sub_categories_sub_category" DROP CONSTRAINT "FK_0d8a506055cd124fe5adb17e202"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial_categories_category" DROP CONSTRAINT "FK_5d5692a81d0aa6e2b2a4c501fa4"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial_categories_category" DROP CONSTRAINT "FK_3d7207dc5d93b1e8f8cc1ac34c9"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP CONSTRAINT "FK_91720d1756e1d171b53af06ac4c"`);
        await queryRunner.query(`ALTER TABLE "law" DROP COLUMN "ementa"`);
        await queryRunner.query(`ALTER TABLE "law" DROP COLUMN "dataPublicacao"`);
        await queryRunner.query(`ALTER TABLE "law" DROP COLUMN "orgao"`);
        await queryRunner.query(`ALTER TABLE "law" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "law" DROP COLUMN "tipo"`);
        await queryRunner.query(`DROP INDEX "IDX_0f02729944f9f9936acebcd018"`);
        await queryRunner.query(`DROP INDEX "IDX_0d8a506055cd124fe5adb17e20"`);
        await queryRunner.query(`DROP TABLE "diario_oficial_sub_categories_sub_category"`);
        await queryRunner.query(`DROP INDEX "IDX_5d5692a81d0aa6e2b2a4c501fa"`);
        await queryRunner.query(`DROP INDEX "IDX_3d7207dc5d93b1e8f8cc1ac34c"`);
        await queryRunner.query(`DROP TABLE "diario_oficial_categories_category"`);
        await queryRunner.query(`DROP TABLE "diario_oficial"`);
    }

}
