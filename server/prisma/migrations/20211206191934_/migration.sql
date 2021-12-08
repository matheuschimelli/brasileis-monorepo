/*
  Warnings:

  - A unique constraint covering the columns `[value]` on the table `Slug` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Slug_value_key" ON "Slug"("value");
