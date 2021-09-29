import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPeticaoPrevidenciariaModel1618012703954 implements MigrationInterface {
    name = 'AddPeticaoPrevidenciariaModel1618012703954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "peticao_previdenciarista" ("id" SERIAL NOT NULL, "titulo" character varying, "resumo" character varying, "tipo" character varying, "status" character varying, "sexo" character varying, "tipoDeProcesso" character varying, "tipoDeAcao" character varying, "tiposDeBeneficio" text array NOT NULL, "subtipo" text array NOT NULL, "competencia" character varying, "tempoDeContribuicaoMinimo" integer, "idadeMinima" integer, "periodo" character varying, "slug" character varying, "tags" text array NOT NULL, "conteudo" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_16c553d84ce2d650eb6d70e81b8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "peticao_previdenciarista"`);
    }

}
