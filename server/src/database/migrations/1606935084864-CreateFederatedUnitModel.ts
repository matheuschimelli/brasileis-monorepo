import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFederatedUnitModel1606935084864 implements MigrationInterface {
    name = 'CreateFederatedUnitModel1606935084864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "federated_unit" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, "description" character varying, "wiki" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_7c6d011bebfee95f4a6c24b7c3e" UNIQUE ("slug"), CONSTRAINT "PK_962205be5b60281c78e8c72ee19" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "federated_unit_categories_category" ("federatedUnitId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_e86416715a92f70f7aee39fcc27" PRIMARY KEY ("federatedUnitId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d29c281de5e2bb858b28de8366" ON "federated_unit_categories_category" ("federatedUnitId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0d26c679511ebc8e5d8f4203a4" ON "federated_unit_categories_category" ("categoryId") `);
        await queryRunner.query(`ALTER TABLE "federated_unit_categories_category" ADD CONSTRAINT "FK_d29c281de5e2bb858b28de83666" FOREIGN KEY ("federatedUnitId") REFERENCES "federated_unit"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "federated_unit_categories_category" ADD CONSTRAINT "FK_0d26c679511ebc8e5d8f4203a42" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "federated_unit_categories_category" DROP CONSTRAINT "FK_0d26c679511ebc8e5d8f4203a42"`);
        await queryRunner.query(`ALTER TABLE "federated_unit_categories_category" DROP CONSTRAINT "FK_d29c281de5e2bb858b28de83666"`);
        await queryRunner.query(`DROP INDEX "IDX_0d26c679511ebc8e5d8f4203a4"`);
        await queryRunner.query(`DROP INDEX "IDX_d29c281de5e2bb858b28de8366"`);
        await queryRunner.query(`DROP TABLE "federated_unit_categories_category"`);
        await queryRunner.query(`DROP TABLE "federated_unit"`);
    }

}
