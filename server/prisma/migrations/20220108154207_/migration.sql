-- AlterTable
ALTER TABLE "User" ADD COLUMN     "topicId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
