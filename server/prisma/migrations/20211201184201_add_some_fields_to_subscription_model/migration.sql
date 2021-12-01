/*
  Warnings:

  - Added the required column `cancelAt` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cancelAtPeriodEnd` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `canceledAt` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endedAt` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trialEnd` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trialStart` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Subscription_invoiceUrl_key";

-- DropIndex
DROP INDEX "Subscription_pdfInvoice_key";

-- DropIndex
DROP INDEX "Subscription_receiptUrl_key";

-- DropIndex
DROP INDEX "Subscription_stripePaymentId_key";

-- DropIndex
DROP INDEX "Subscription_stripeTransactionId_key";

-- DropIndex
DROP INDEX "Subscription_urlInvoice_key";

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "cancelAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cancelAtPeriodEnd" TEXT NOT NULL,
ADD COLUMN     "canceledAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "trialEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "trialStart" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "stripeTransactionId" DROP NOT NULL,
ALTER COLUMN "invoiceUrl" DROP NOT NULL,
ALTER COLUMN "receiptUrl" DROP NOT NULL,
ALTER COLUMN "pdfInvoice" DROP NOT NULL,
ALTER COLUMN "urlInvoice" DROP NOT NULL,
ALTER COLUMN "stripePaymentId" DROP NOT NULL;
