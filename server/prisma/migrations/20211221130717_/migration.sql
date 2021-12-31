-- DropForeignKey
ALTER TABLE "Crawler" DROP CONSTRAINT "Crawler_lawBlockId_fkey";

-- AlterTable
ALTER TABLE "Crawler" ALTER COLUMN "lawBlockId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Crawler" ADD CONSTRAINT "Crawler_lawBlockId_fkey" FOREIGN KEY ("lawBlockId") REFERENCES "LawBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
