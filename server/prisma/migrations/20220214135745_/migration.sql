/*
  Warnings:

  - Added the required column `updated` to the `Jurisprudencia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jurisprudencia" ADD COLUMN     "updated" BOOLEAN NOT NULL;
