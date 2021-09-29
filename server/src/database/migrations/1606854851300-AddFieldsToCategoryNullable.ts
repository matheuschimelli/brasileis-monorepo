import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldsToCategoryNullable1606854851300 implements MigrationInterface {
    name = 'AddFieldsToCategoryNullable1606854851300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."description" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "category"."description" IS NULL`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "description" SET NOT NULL`);
    }

}
