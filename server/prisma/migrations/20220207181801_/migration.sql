-- CreateTable
CREATE TABLE "_CategoryToCrawler" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToCrawler_AB_unique" ON "_CategoryToCrawler"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToCrawler_B_index" ON "_CategoryToCrawler"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToCrawler" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToCrawler" ADD FOREIGN KEY ("B") REFERENCES "Crawler"("id") ON DELETE CASCADE ON UPDATE CASCADE;
