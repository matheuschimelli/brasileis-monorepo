/*
  Warnings:

  - You are about to drop the column `number` on the `BlockProperty` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BlockProperty" DROP COLUMN "number",
ADD COLUMN     "articleId" TEXT,
ADD COLUMN     "parentId" TEXT;
