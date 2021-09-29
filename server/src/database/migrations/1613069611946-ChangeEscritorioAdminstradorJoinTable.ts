import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeEscritorioAdminstradorJoinTable1613069611946 implements MigrationInterface {
    name = 'ChangeEscritorioAdminstradorJoinTable1613069611946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_0c9919be86567e9edb3b0c96c70"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_0c9919be86567e9edb3b0c96c70"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "escritorioAdministadorId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "escritorioAdministadorId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_0c9919be86567e9edb3b0c96c70" UNIQUE ("escritorioAdministadorId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_0c9919be86567e9edb3b0c96c70" FOREIGN KEY ("escritorioAdministadorId") REFERENCES "escritorio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
