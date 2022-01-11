/*
  Warnings:

  - Added the required column `topicId` to the `Crawler` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Crawler" ADD COLUMN     "topicId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Crawler" ADD CONSTRAINT "Crawler_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
