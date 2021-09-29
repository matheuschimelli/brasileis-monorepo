import {MigrationInterface, QueryRunner} from "typeorm";

export class AddOrderFieldToCategory1606919948865 implements MigrationInterface {
    name = 'AddOrderFieldToCategory1606919948865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "order" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "order"`);
    }

}
