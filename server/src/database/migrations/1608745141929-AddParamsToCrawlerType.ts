import {MigrationInterface, QueryRunner} from "typeorm";

export class AddParamsToCrawlerType1608745141929 implements MigrationInterface {
    name = 'AddParamsToCrawlerType1608745141929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawler_type" ADD "params" json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawler_type" DROP COLUMN "params"`);
    }

}
