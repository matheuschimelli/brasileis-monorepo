/*
  Warnings:

  - You are about to drop the column `blockPropertyId` on the `BlockAuthor` table. All the data in the column will be lost.
  - You are about to drop the column `blockPropertyId` on the `LawComment` table. All the data in the column will be lost.
  - You are about to drop the `BlockProperty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BlockAuthor" DROP CONSTRAINT "BlockAuthor_blockPropertyId_fkey";

-- DropForeignKey
ALTER TABLE "BlockProperty" DROP CONSTRAINT "BlockProperty_slugId_fkey";

-- DropForeignKey
ALTER TABLE "LawComment" DROP CONSTRAINT "LawComment_blockPropertyId_fkey";

-- AlterTable
ALTER TABLE "BlockAuthor" DROP COLUMN "blockPropertyId";

-- AlterTable
ALTER TABLE "LawComment" DROP COLUMN "blockPropertyId";

-- DropTable
DROP TABLE "BlockProperty";
