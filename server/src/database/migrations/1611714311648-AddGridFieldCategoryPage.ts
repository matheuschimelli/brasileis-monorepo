import {MigrationInterface, QueryRunner} from "typeorm";

export class AddGridFieldCategoryPage1611714311648 implements MigrationInterface {
    name = 'AddGridFieldCategoryPage1611714311648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_page" ADD "grid" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_page" DROP COLUMN "grid"`);
    }

}
