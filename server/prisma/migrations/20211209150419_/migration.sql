/*
  Warnings:

  - You are about to drop the column `lawBlockId` on the `LawBlock` table. All the data in the column will be lost.
  - You are about to drop the column `parentBlockId` on the `LawBlock` table. All the data in the column will be lost.
  - You are about to drop the `_LawBlockToLawBlock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LawBlock" DROP CONSTRAINT "LawBlock_lawBlockId_fkey";

-- DropForeignKey
ALTER TABLE "LawBlock" DROP CONSTRAINT "LawBlock_parentBlockId_fkey";

-- DropForeignKey
ALTER TABLE "_LawBlockToLawBlock" DROP CONSTRAINT "_LawBlockToLawBlock_A_fkey";

-- DropForeignKey
ALTER TABLE "_LawBlockToLawBlock" DROP CONSTRAINT "_LawBlockToLawBlock_B_fkey";

-- DropIndex
DROP INDEX "LawBlock_parentBlockId_key";

-- AlterTable
ALTER TABLE "LawBlock" DROP COLUMN "lawBlockId",
DROP COLUMN "parentBlockId",
ADD COLUMN     "blockId" TEXT;

-- DropTable
DROP TABLE "_LawBlockToLawBlock";

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "LawBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
