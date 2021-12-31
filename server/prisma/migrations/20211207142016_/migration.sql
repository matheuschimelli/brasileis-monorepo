-- AlterTable
ALTER TABLE "LawBlock" ADD COLUMN     "parentBlockId" TEXT;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_parentBlockId_fkey" FOREIGN KEY ("parentBlockId") REFERENCES "LawBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
