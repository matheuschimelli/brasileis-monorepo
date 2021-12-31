-- AlterTable
ALTER TABLE "Crawler" ADD COLUMN     "crawlerTypeId" TEXT;

-- CreateTable
CREATE TABLE "CrawlerType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "customCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CrawlerType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CrawlerType_name_key" ON "CrawlerType"("name");

-- AddForeignKey
ALTER TABLE "Crawler" ADD CONSTRAINT "Crawler_crawlerTypeId_fkey" FOREIGN KEY ("crawlerTypeId") REFERENCES "CrawlerType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
