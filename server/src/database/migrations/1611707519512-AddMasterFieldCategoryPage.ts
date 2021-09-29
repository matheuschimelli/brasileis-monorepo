import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMasterFieldCategoryPage1611707519512 implements MigrationInterface {
    name = 'AddMasterFieldCategoryPage1611707519512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_page" ADD "master" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_page" DROP COLUMN "master"`);
    }

}
