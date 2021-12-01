-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'PRO';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isPro" BOOLEAN DEFAULT false;
