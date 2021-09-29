import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUserModel1609960300169 implements MigrationInterface {
    name = 'UpdateUserModel1609960300169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "expirationDate" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TYPE "public"."user_role_enum" RENAME TO "user_role_enum_old"`);
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('admin', 'editor', 'guest', 'subscriber', 'personal', 'pro', 'premium', 'business', 'staff', 'free')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" TYPE "user_role_enum" USING "role"::"text"::"user_role_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'free'`);
        await queryRunner.query(`DROP TYPE "user_role_enum_old"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."role" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'free'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'guest'`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."role" IS NULL`);
        await queryRunner.query(`CREATE TYPE "user_role_enum_old" AS ENUM('admin', 'editor', 'guest', 'subscriber')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" TYPE "user_role_enum_old" USING "role"::"text"::"user_role_enum_old"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'free'`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
        await queryRunner.query(`ALTER TYPE "user_role_enum_old" RENAME TO  "user_role_enum"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "expirationDate"`);
    }

}
