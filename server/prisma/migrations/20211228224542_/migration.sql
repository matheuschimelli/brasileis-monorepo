/*
  Warnings:

  - You are about to drop the column `order` on the `LawBlock` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LawBlock" DROP COLUMN "order",
ADD COLUMN     "lawBlockId" TEXT;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_lawBlockId_fkey" FOREIGN KEY ("lawBlockId") REFERENCES "LawBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
