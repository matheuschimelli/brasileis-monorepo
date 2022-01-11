-- DropForeignKey
ALTER TABLE "FeedItem" DROP CONSTRAINT "FeedItem_lawBlockId_fkey";

-- AlterTable
ALTER TABLE "FeedItem" ALTER COLUMN "lawBlockId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FeedItem" ADD CONSTRAINT "FeedItem_lawBlockId_fkey" FOREIGN KEY ("lawBlockId") REFERENCES "LawBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
