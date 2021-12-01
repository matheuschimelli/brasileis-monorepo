/*
  Warnings:

  - You are about to drop the column `subscriptionId` on the `Subscription` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stripePaymentId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stripeSubscriptionId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stripePaymentId` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stripeSubscriptionId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Subscription_subscriptionId_key";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "subscriptionId",
ADD COLUMN     "stripePaymentId" TEXT NOT NULL,
ADD COLUMN     "stripeSubscriptionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripePaymentId_key" ON "Subscription"("stripePaymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripeSubscriptionId_key" ON "Subscription"("stripeSubscriptionId");
