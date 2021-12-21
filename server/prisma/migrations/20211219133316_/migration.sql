-- CreateTable
CREATE TABLE "Crawler" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isUrlOnly" BOOLEAN NOT NULL DEFAULT true,
    "source" TEXT,
    "cron" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lawBlockId" TEXT NOT NULL,

    CONSTRAINT "Crawler_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Crawler_lawBlockId_key" ON "Crawler"("lawBlockId");

-- AddForeignKey
ALTER TABLE "Crawler" ADD CONSTRAINT "Crawler_lawBlockId_fkey" FOREIGN KEY ("lawBlockId") REFERENCES "LawBlock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
