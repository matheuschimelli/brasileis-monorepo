-- DropForeignKey
ALTER TABLE "LawBlock" DROP CONSTRAINT "LawBlock_propertyId_fkey";

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "BlockProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;
