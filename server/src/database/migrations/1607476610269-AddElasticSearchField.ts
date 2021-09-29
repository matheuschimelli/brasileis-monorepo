import {MigrationInterface, QueryRunner} from "typeorm";

export class AddElasticSearchField1607476610269 implements MigrationInterface {
    name = 'AddElasticSearchField1607476610269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "law" ADD "esId" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "law" DROP COLUMN "esId"`);
    }

}
