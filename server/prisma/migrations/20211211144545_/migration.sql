-- AlterTable
ALTER TABLE "LawBlock" ADD COLUMN     "relatedBlockId" TEXT;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_relatedBlockId_fkey" FOREIGN KEY ("relatedBlockId") REFERENCES "LawBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
