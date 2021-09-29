import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFeaturedFieldToArticle1617830703101 implements MigrationInterface {
    name = 'AddFeaturedFieldToArticle1617830703101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" ADD "featured" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "featured"`);
    }

}
