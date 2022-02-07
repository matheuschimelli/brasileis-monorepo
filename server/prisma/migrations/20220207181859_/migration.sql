-- DropForeignKey
ALTER TABLE "Crawler" DROP CONSTRAINT "Crawler_topicId_fkey";

-- AlterTable
ALTER TABLE "Crawler" ALTER COLUMN "topicId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Crawler" ADD CONSTRAINT "Crawler_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
