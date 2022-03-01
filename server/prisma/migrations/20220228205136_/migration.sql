/*
  Warnings:

  - You are about to drop the column `tribunal` on the `Jurisprudencia` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Jurisprudencia" DROP COLUMN "tribunal",
ADD COLUMN     "tribunalId" TEXT,
ADD COLUMN     "tribunalSlug" TEXT;

-- CreateTable
CREATE TABLE "Tribunal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Tribunal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tribunal_name_key" ON "Tribunal"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tribunal_slug_key" ON "Tribunal"("slug");

-- AddForeignKey
ALTER TABLE "Jurisprudencia" ADD CONSTRAINT "Jurisprudencia_tribunalId_fkey" FOREIGN KEY ("tribunalId") REFERENCES "Tribunal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
