/*
  Warnings:

  - You are about to drop the column `lawBlockId` on the `BlockProperty` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[propertyId]` on the table `LawBlock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `propertyId` to the `LawBlock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BlockProperty" DROP CONSTRAINT "BlockProperty_lawBlockId_fkey";

-- DropIndex
DROP INDEX "BlockProperty_lawBlockId_key";

-- AlterTable
ALTER TABLE "BlockProperty" DROP COLUMN "lawBlockId";

-- AlterTable
ALTER TABLE "LawBlock" ADD COLUMN     "propertyId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "LawBlock_propertyId_key" ON "LawBlock"("propertyId");

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "BlockProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
