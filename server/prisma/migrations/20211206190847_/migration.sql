/*
  Warnings:

  - The values [LAW,JURISPRUDENCE,ARTICLE,PARAGRAPH,INCISE,ALINEA,UNIQUE_PARAGRAPH,CODE,CONSTITUTION] on the enum `BlockType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BlockType_new" AS ENUM ('LEI', 'JURISPRUDENCIA', 'ARTIGO_LEI', 'PARAGRAFO_LEI', 'INCISO_LEI', 'ALINEA_LEI', 'PARAGRAFO_UNICO_LEI', 'INFO', 'CODIGO');
ALTER TABLE "LawBlock" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "LawBlock" ALTER COLUMN "type" TYPE "BlockType_new" USING ("type"::text::"BlockType_new");
ALTER TYPE "BlockType" RENAME TO "BlockType_old";
ALTER TYPE "BlockType_new" RENAME TO "BlockType";
DROP TYPE "BlockType_old";
ALTER TABLE "LawBlock" ALTER COLUMN "type" SET DEFAULT 'ARTIGO_LEI';
COMMIT;

-- AlterTable
ALTER TABLE "LawBlock" ALTER COLUMN "type" SET DEFAULT E'ARTIGO_LEI';
