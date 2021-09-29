import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEscritorioOwnerAndSocios1611774562335 implements MigrationInterface {
    name = 'AddEscritorioOwnerAndSocios1611774562335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "escritorioSocioId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c156fffa69831a1efc208c97ea5" FOREIGN KEY ("escritorioSocioId") REFERENCES "escritorio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c156fffa69831a1efc208c97ea5"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "escritorioSocioId"`);
    }

}
