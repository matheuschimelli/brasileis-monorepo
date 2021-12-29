/*
  Warnings:

  - A unique constraint covering the columns `[crawlerId]` on the table `LawBlock` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Crawler" DROP CONSTRAINT "Crawler_lawBlockId_fkey";

-- DropForeignKey
ALTER TABLE "LawBlock" DROP CONSTRAINT "LawBlock_blockId_fkey";

-- AlterTable
ALTER TABLE "LawBlock" ADD COLUMN     "crawlerId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "LawBlock_crawlerId_key" ON "LawBlock"("crawlerId");

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "LawBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_crawlerId_fkey" FOREIGN KEY ("crawlerId") REFERENCES "Crawler"("id") ON DELETE CASCADE ON UPDATE CASCADE;
