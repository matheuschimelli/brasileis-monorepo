/*
  Warnings:

  - You are about to drop the column `type` on the `Crawler` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Crawler" DROP COLUMN "type",
ADD COLUMN     "blockType" "BlockType" NOT NULL DEFAULT E'CODIGO';
