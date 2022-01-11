/*
  Warnings:

  - You are about to drop the column `FeedItemId` on the `LawBlock` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LawBlock" DROP COLUMN "FeedItemId",
ADD COLUMN     "feedItemId" TEXT;
