/*
  Warnings:

  - You are about to drop the column `userId` on the `OneTimeServiceSale` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ProductSale` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ServiceSale` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userGroupTypeId]` on the table `OneTimeServiceSale` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userGroupTypeId]` on the table `ProductSale` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userGroupTypeId]` on the table `ServiceSale` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userGroupTypeId` to the `OneTimeServiceSale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userGroupTypeId` to the `ProductSale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userGroupTypeId` to the `ServiceSale` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OneTimeServiceSale" DROP CONSTRAINT "OneTimeServiceSale_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSale" DROP CONSTRAINT "ProductSale_userId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceSale" DROP CONSTRAINT "ServiceSale_userId_fkey";

-- DropIndex
DROP INDEX "OneTimeServiceSale_userId_key";

-- DropIndex
DROP INDEX "ProductSale_userId_key";

-- DropIndex
DROP INDEX "ServiceSale_userId_key";

-- AlterTable
ALTER TABLE "OneTimeServiceSale" DROP COLUMN "userId",
ADD COLUMN     "userGroupTypeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductSale" DROP COLUMN "userId",
ADD COLUMN     "userGroupTypeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ServiceSale" DROP COLUMN "userId",
ADD COLUMN     "userGroupTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "code" INTEGER NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "company" VARCHAR(255),
    "VAT_ID" VARCHAR(60),
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "state" VARCHAR(100) NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "number" INTEGER NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" SERIAL NOT NULL,
    "productSaleId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "paymentTypeId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "shipmentTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShipmentType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,

    CONSTRAINT "ShipmentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShipmentStatus" (
    "id" SERIAL NOT NULL,
    "shipmentId" INTEGER NOT NULL,
    "time" TIMESTAMP NOT NULL,
    "notes" TEXT NOT NULL,
    "statusCatalogId" INTEGER NOT NULL,

    CONSTRAINT "ShipmentStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusCatalog" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "StatusCatalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,

    CONSTRAINT "PaymentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentDetails" (
    "id" SERIAL NOT NULL,
    "shipmentId" INTEGER NOT NULL,
    "paymentDataId" INTEGER NOT NULL,
    "value" VARCHAR(255) NOT NULL,

    CONSTRAINT "PaymentDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentData" (
    "id" SERIAL NOT NULL,
    "dataName" VARCHAR(255) NOT NULL,
    "dataType" VARCHAR(255) NOT NULL,
    "paymentTypeId" INTEGER NOT NULL,

    CONSTRAINT "PaymentData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OneTimeServiceSale_userGroupTypeId_key" ON "OneTimeServiceSale"("userGroupTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSale_userGroupTypeId_key" ON "ProductSale"("userGroupTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceSale_userGroupTypeId_key" ON "ServiceSale"("userGroupTypeId");

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSale" ADD CONSTRAINT "ServiceSale_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OneTimeServiceSale" ADD CONSTRAINT "OneTimeServiceSale_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "State" ADD CONSTRAINT "State_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_productSaleId_fkey" FOREIGN KEY ("productSaleId") REFERENCES "ProductSale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_paymentTypeId_fkey" FOREIGN KEY ("paymentTypeId") REFERENCES "PaymentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_shipmentTypeId_fkey" FOREIGN KEY ("shipmentTypeId") REFERENCES "ShipmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShipmentStatus" ADD CONSTRAINT "ShipmentStatus_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShipmentStatus" ADD CONSTRAINT "ShipmentStatus_statusCatalogId_fkey" FOREIGN KEY ("statusCatalogId") REFERENCES "StatusCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentDetails" ADD CONSTRAINT "PaymentDetails_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentDetails" ADD CONSTRAINT "PaymentDetails_paymentDataId_fkey" FOREIGN KEY ("paymentDataId") REFERENCES "PaymentData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentData" ADD CONSTRAINT "PaymentData_paymentTypeId_fkey" FOREIGN KEY ("paymentTypeId") REFERENCES "PaymentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
