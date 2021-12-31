-- DropForeignKey
ALTER TABLE "Crawler" DROP CONSTRAINT "Crawler_lawBlockId_fkey";

-- AlterTable
ALTER TABLE "Crawler" ADD COLUMN     "mainBlockDescription" TEXT,
ADD COLUMN     "mainBlockTitle" TEXT,
ADD COLUMN     "slug" TEXT,
ADD COLUMN     "version" INTEGER DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Crawler" ADD CONSTRAINT "Crawler_lawBlockId_fkey" FOREIGN KEY ("lawBlockId") REFERENCES "LawBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
