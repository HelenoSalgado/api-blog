-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "timeCreated" TIMESTAMP NOT NULL,
    "timePaid" TIMESTAMP NOT NULL,
    "amount" DECIMAL NOT NULL,
    "amountPaid" DECIMAL NOT NULL,
    "taxAmount" DECIMAL NOT NULL,
    "statusId" INTEGER NOT NULL,
    "userGroupTypeId" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaleStatus" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "SaleStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "priceUnit" DECIMAL NOT NULL,
    "basicUnit" VARCHAR(255) NOT NULL,
    "taxPercentage" DECIMAL NOT NULL,
    "limited" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSale" (
    "id" SERIAL NOT NULL,
    "quantitySold" DECIMAL NOT NULL,
    "priceUnit" DECIMAL NOT NULL,
    "price" DECIMAL NOT NULL,
    "taxAmount" DECIMAL NOT NULL,
    "limited" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,
    "saleId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "inStock" DECIMAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "priceUnit" DECIMAL NOT NULL,
    "basicUnit" VARCHAR(255) NOT NULL,
    "taxPercentage" DECIMAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "period" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceSale" (
    "id" SERIAL NOT NULL,
    "quantitySold" DECIMAL NOT NULL,
    "priceUnit" DECIMAL NOT NULL,
    "price" DECIMAL NOT NULL,
    "taxAmount" DECIMAL NOT NULL,
    "renove" BOOLEAN NOT NULL DEFAULT true,
    "period" INTEGER NOT NULL,
    "startTime" TIMESTAMP NOT NULL,
    "endTime" TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "saleId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "ServiceSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OneTimeService" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL NOT NULL,
    "taxPercentage" DECIMAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "OneTimeService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OneTimeServiceSale" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL NOT NULL,
    "taxAmount" DECIMAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "saleId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "OneTimeServiceSale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductSale_userId_key" ON "ProductSale"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_productId_key" ON "Stock"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceSale_userId_key" ON "ServiceSale"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OneTimeServiceSale_userId_key" ON "OneTimeServiceSale"("userId");

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "SaleStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSale" ADD CONSTRAINT "ServiceSale_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSale" ADD CONSTRAINT "ServiceSale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSale" ADD CONSTRAINT "ServiceSale_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OneTimeServiceSale" ADD CONSTRAINT "OneTimeServiceSale_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OneTimeServiceSale" ADD CONSTRAINT "OneTimeServiceSale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OneTimeServiceSale" ADD CONSTRAINT "OneTimeServiceSale_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "OneTimeService"("id") ON DELETE CASCADE ON UPDATE CASCADE;
