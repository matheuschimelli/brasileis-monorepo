-- CreateEnum
CREATE TYPE "TipoJudiciario" AS ENUM ('JUSTICA_ESTADUAL', 'JUSTICA_FEDERAL');

-- CreateEnum
CREATE TYPE "Instancia" AS ENUM ('PRIMEIRA_INSTANCIA', 'SEGUNDA_INSTANCIA', 'TERCEIRA_INSTANCIA');

-- CreateTable
CREATE TABLE "Jurisprudencia" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "checkSum" TEXT NOT NULL,
    "tipo" "TipoJudiciario" NOT NULL,
    "instancia" "Instancia" NOT NULL,
    "tribunal" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "comarca" TEXT,
    "dataJulgamento" TIMESTAMP(3),
    "dataPublicacao" TIMESTAMP(3),
    "ementa" TEXT,
    "integra" TEXT,
    "numeroProcesso" TEXT,
    "orgaoJulgador" TEXT,
    "relator" TEXT,
    "segredoDeJustica" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jurisprudencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JurisprudenciaToLawBlock" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_JurisprudenciaToLawBlock_AB_unique" ON "_JurisprudenciaToLawBlock"("A", "B");

-- CreateIndex
CREATE INDEX "_JurisprudenciaToLawBlock_B_index" ON "_JurisprudenciaToLawBlock"("B");

-- AddForeignKey
ALTER TABLE "_JurisprudenciaToLawBlock" ADD FOREIGN KEY ("A") REFERENCES "Jurisprudencia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JurisprudenciaToLawBlock" ADD FOREIGN KEY ("B") REFERENCES "LawBlock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
