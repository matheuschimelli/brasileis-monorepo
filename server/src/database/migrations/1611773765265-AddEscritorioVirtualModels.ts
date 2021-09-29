import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEscritorioVirtualModels1611773765265 implements MigrationInterface {
    name = 'AddEscritorioVirtualModels1611773765265'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "peticao_privada" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying NOT NULL, "content" character varying, "textContent" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "escritorioId" uuid, "processoId" uuid, CONSTRAINT "PK_420c8a0e0d3ff9985504d91e404" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "processo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "slug" character varying NOT NULL, "andamento" character varying, "tri" character varying, "rg" character varying, "tituloEleitor" character varying, "carteiraMotorista" character varying, "endereco" character varying, "endereco2" character varying, "telefone" character varying, "telefone2" character varying, "email" character varying, "email2" character varying, "estadoCivil" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "escritorioId" uuid, CONSTRAINT "UQ_be44e7a00531d2a7c21be3fa42b" UNIQUE ("slug"), CONSTRAINT "PK_b72fde2a8acd7a422692b9ab5f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "escritorio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "slug" character varying NOT NULL, "description" character varying, "imgLogo" character varying, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_efbb663dd38fae7d26896e536d2" UNIQUE ("slug"), CONSTRAINT "PK_2d1315cb36953e91c6fb1da04af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "cpf" character varying, "rg" character varying, "tituloEleitor" character varying, "slug" character varying NOT NULL, "carteiraMotorista" character varying, "endereco" character varying, "endereco2" character varying, "telefone" character varying, "telefone2" character varying, "email" character varying, "email2" character varying, "estadoCivil" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "escritorioId" uuid, CONSTRAINT "UQ_e650671e66e79e24cb4b2df1cc5" UNIQUE ("slug"), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "processo_clientes_cliente" ("processoId" uuid NOT NULL, "clienteId" uuid NOT NULL, CONSTRAINT "PK_952f9fd4763443783e64960a17c" PRIMARY KEY ("processoId", "clienteId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2d20da1d2732772ff92a523c14" ON "processo_clientes_cliente" ("processoId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bcb7fc0fa189cce9ea44419a2a" ON "processo_clientes_cliente" ("clienteId") `);
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD CONSTRAINT "FK_b891054c5f4a8d55d33ec9eb90f" FOREIGN KEY ("escritorioId") REFERENCES "escritorio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" ADD CONSTRAINT "FK_8fdefe22e51545cf373c2036e52" FOREIGN KEY ("processoId") REFERENCES "processo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "processo" ADD CONSTRAINT "FK_1a85be99fe722a1c458a309da7a" FOREIGN KEY ("escritorioId") REFERENCES "escritorio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "FK_4b2586a4339ea367efc0ba7396f" FOREIGN KEY ("escritorioId") REFERENCES "escritorio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "processo_clientes_cliente" ADD CONSTRAINT "FK_2d20da1d2732772ff92a523c14a" FOREIGN KEY ("processoId") REFERENCES "processo"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "processo_clientes_cliente" ADD CONSTRAINT "FK_bcb7fc0fa189cce9ea44419a2a0" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "processo_clientes_cliente" DROP CONSTRAINT "FK_bcb7fc0fa189cce9ea44419a2a0"`);
        await queryRunner.query(`ALTER TABLE "processo_clientes_cliente" DROP CONSTRAINT "FK_2d20da1d2732772ff92a523c14a"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "FK_4b2586a4339ea367efc0ba7396f"`);
        await queryRunner.query(`ALTER TABLE "processo" DROP CONSTRAINT "FK_1a85be99fe722a1c458a309da7a"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP CONSTRAINT "FK_8fdefe22e51545cf373c2036e52"`);
        await queryRunner.query(`ALTER TABLE "peticao_privada" DROP CONSTRAINT "FK_b891054c5f4a8d55d33ec9eb90f"`);
        await queryRunner.query(`DROP INDEX "IDX_bcb7fc0fa189cce9ea44419a2a"`);
        await queryRunner.query(`DROP INDEX "IDX_2d20da1d2732772ff92a523c14"`);
        await queryRunner.query(`DROP TABLE "processo_clientes_cliente"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "escritorio"`);
        await queryRunner.query(`DROP TABLE "processo"`);
        await queryRunner.query(`DROP TABLE "peticao_privada"`);
    }

}
