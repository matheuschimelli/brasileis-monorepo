/*
  Warnings:

  - The `cancelAtPeriodEnd` column on the `Subscription` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "cancelAtPeriodEnd",
ADD COLUMN     "cancelAtPeriodEnd" BOOLEAN;
