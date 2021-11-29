-- CreateTable
CREATE TABLE "Membership" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "stripeTransactionId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "invoiceUrl" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "receiptUrl" TEXT NOT NULL,
    "pdfInvoice" TEXT NOT NULL,
    "urlInvoice" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
