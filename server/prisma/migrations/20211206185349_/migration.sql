/*
  Warnings:

  - You are about to drop the column `slug` on the `BlockProperty` table. All the data in the column will be lost.
  - Added the required column `slugId` to the `BlockProperty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlockProperty" DROP COLUMN "slug",
ADD COLUMN     "slugId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Slug" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Slug_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BlockProperty" ADD CONSTRAINT "BlockProperty_slugId_fkey" FOREIGN KEY ("slugId") REFERENCES "Slug"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
