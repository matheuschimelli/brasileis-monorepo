/*
  Warnings:

  - A unique constraint covering the columns `[parentBlockId]` on the table `LawBlock` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "_LawBlockToLawBlock" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LawBlockToLawBlock_AB_unique" ON "_LawBlockToLawBlock"("A", "B");

-- CreateIndex
CREATE INDEX "_LawBlockToLawBlock_B_index" ON "_LawBlockToLawBlock"("B");

-- CreateIndex
CREATE UNIQUE INDEX "LawBlock_parentBlockId_key" ON "LawBlock"("parentBlockId");

-- AddForeignKey
ALTER TABLE "_LawBlockToLawBlock" ADD FOREIGN KEY ("A") REFERENCES "LawBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LawBlockToLawBlock" ADD FOREIGN KEY ("B") REFERENCES "LawBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
