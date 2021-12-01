/*
  Warnings:

  - You are about to drop the column `membersOnly` on the `BlockProperty` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stripeTransactionId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customerId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[invoiceUrl]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subscriptionId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[receiptUrl]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pdfInvoice]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[urlInvoice]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "BlockProperty" DROP COLUMN "membersOnly",
ADD COLUMN     "subsOnly" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripeTransactionId_key" ON "Subscription"("stripeTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_customerId_key" ON "Subscription"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_invoiceUrl_key" ON "Subscription"("invoiceUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_subscriptionId_key" ON "Subscription"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_receiptUrl_key" ON "Subscription"("receiptUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_pdfInvoice_key" ON "Subscription"("pdfInvoice");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_urlInvoice_key" ON "Subscription"("urlInvoice");
