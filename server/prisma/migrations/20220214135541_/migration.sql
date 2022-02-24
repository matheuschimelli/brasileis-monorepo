-- CreateTable
CREATE TABLE "_JurisprudenciaChanges" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_JurisprudenciaChanges_AB_unique" ON "_JurisprudenciaChanges"("A", "B");

-- CreateIndex
CREATE INDEX "_JurisprudenciaChanges_B_index" ON "_JurisprudenciaChanges"("B");

-- AddForeignKey
ALTER TABLE "_JurisprudenciaChanges" ADD FOREIGN KEY ("A") REFERENCES "Jurisprudencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JurisprudenciaChanges" ADD FOREIGN KEY ("B") REFERENCES "Jurisprudencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;
