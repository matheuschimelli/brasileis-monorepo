-- CreateTable
CREATE TABLE "_CategoryToFeedItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToFeedItem_AB_unique" ON "_CategoryToFeedItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToFeedItem_B_index" ON "_CategoryToFeedItem"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToFeedItem" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToFeedItem" ADD FOREIGN KEY ("B") REFERENCES "FeedItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
