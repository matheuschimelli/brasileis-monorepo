-- CreateEnum
CREATE TYPE "BlockType" AS ENUM ('LAW', 'JURISPRUDENCE', 'ARTICLE', 'PARAGRAPH', 'INCISE', 'ALINEA', 'UNIQUE_PARAGRAPH', 'INFO', 'CODE', 'CONSTITUTION');

-- CreateTable
CREATE TABLE "BlockProperty" (
    "id" TEXT NOT NULL,
    "value" TEXT,
    "title" TEXT,
    "number" TEXT,
    "identifier" TEXT,
    "comment" TEXT,
    "year" INTEGER,
    "author" TEXT,
    "membersOnly" BOOLEAN NOT NULL DEFAULT false,
    "searchString" TEXT,
    "lawBlockId" TEXT NOT NULL,

    CONSTRAINT "BlockProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawBlock" (
    "id" TEXT NOT NULL,
    "type" "BlockType" NOT NULL DEFAULT E'ARTICLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lawBlockId" TEXT,

    CONSTRAINT "LawBlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlockProperty_lawBlockId_key" ON "BlockProperty"("lawBlockId");

-- AddForeignKey
ALTER TABLE "BlockProperty" ADD CONSTRAINT "BlockProperty_lawBlockId_fkey" FOREIGN KEY ("lawBlockId") REFERENCES "LawBlock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawBlock" ADD CONSTRAINT "LawBlock_lawBlockId_fkey" FOREIGN KEY ("lawBlockId") REFERENCES "LawBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
