/*
  Warnings:

  - You are about to drop the column `comment` on the `BlockProperty` table. All the data in the column will be lost.
  - You are about to drop the column `propertyId` on the `LawBlock` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "LawBlock" DROP CONSTRAINT "LawBlock_propertyId_fkey";

-- DropIndex
DROP INDEX "LawBlock_propertyId_key";

-- AlterTable
ALTER TABLE "BlockProperty" DROP COLUMN "comment",
ADD COLUMN     "lawBlockId" TEXT;

-- AlterTable
ALTER TABLE "LawBlock" DROP COLUMN "propertyId",
ADD COLUMN     "blockAuthorId" TEXT,
ADD COLUMN     "identifier" TEXT,
ADD COLUMN     "isRef" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "searchString" TEXT,
ADD COLUMN     "slugId" TEXT,
ADD COLUMN     "subsOnly" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" TEXT,
ADD COLUMN     "value" TEXT,
ADD COLUMN     "year" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "LawComment" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "blockPropertyId" TEXT,
    "lawBlockId" TEXT,

    CONSTRAINT "LawComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockAuthor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "blockPropertyId" TEXT NOT NULL,

    CONSTRAINT "BlockAuthor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LawComment" ADD CONSTRAINT "LawComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawComment" ADD CONSTRAINT "LawComment_blockPropertyId_fkey" FOREIGN KEY ("blockPropertyId") REFERENCES "BlockProperty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawComment" ADD CONSTRAINT "LawComment_lawBlockId_fkey" FOREIGN KEY ("lawBlockId") REFERENCES "LawBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockAuthor" ADD CONSTRAINT "BlockAuthor_blockPropertyId_fkey" FOREIGN KEY ("blockPropertyId") REFERENCES "BlockProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_slugId_fkey" FOREIGN KEY ("slugId") REFERENCES "Slug"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_blockAuthorId_fkey" FOREIGN KEY ("blockAuthorId") REFERENCES "BlockAuthor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
