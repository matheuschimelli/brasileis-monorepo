/*
  Warnings:

  - Added the required column `slug` to the `BlockProperty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlockProperty" ADD COLUMN     "slug" TEXT NOT NULL;
