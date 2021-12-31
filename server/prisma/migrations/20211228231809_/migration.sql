/*
  Warnings:

  - You are about to drop the column `blockId` on the `LawBlock` table. All the data in the column will be lost.
  - You are about to drop the column `lawBlockId` on the `LawBlock` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "LawBlock" DROP CONSTRAINT "LawBlock_blockId_fkey";

-- DropForeignKey
ALTER TABLE "LawBlock" DROP CONSTRAINT "LawBlock_lawBlockId_fkey";

-- AlterTable
ALTER TABLE "LawBlock" DROP COLUMN "blockId",
DROP COLUMN "lawBlockId",
ADD COLUMN     "belongsToLawBlockId" TEXT,
ADD COLUMN     "parentBlockId" TEXT;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_belongsToLawBlockId_fkey" FOREIGN KEY ("belongsToLawBlockId") REFERENCES "LawBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_parentBlockId_fkey" FOREIGN KEY ("parentBlockId") REFERENCES "LawBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
