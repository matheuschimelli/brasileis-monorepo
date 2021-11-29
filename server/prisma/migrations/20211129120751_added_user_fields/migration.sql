/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "authorId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "picture" TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "admin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "tokens" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "username" VARCHAR(255),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
