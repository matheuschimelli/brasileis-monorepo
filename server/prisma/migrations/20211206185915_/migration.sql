/*
  Warnings:

  - Added the required column `title` to the `Slug` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slug" ADD COLUMN     "title" TEXT NOT NULL;
