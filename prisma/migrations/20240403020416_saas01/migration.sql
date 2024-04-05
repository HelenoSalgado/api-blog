-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'AUTHOR', 'STORE');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "company" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(255) NOT NULL,
    "CNPJ" VARCHAR(100) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "provider" VARCHAR(64),
    "password" VARCHAR(255) NOT NULL,
    "resetPasswordToken" VARCHAR(255),
    "confirmationCode" VARCHAR(6),
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "isAdmin" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sendNewlatter" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "accountId" SMALLINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sendNewlatter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(64) NOT NULL,
    "lastName" VARCHAR(64) NOT NULL,
    "username" VARCHAR(64) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "provider" VARCHAR(64),
    "password" VARCHAR(255) NOT NULL,
    "resetPasswordToken" VARCHAR(255),
    "confirmationCode" VARCHAR(6),
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "jobTitle" VARCHAR(64),
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "accountId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(255),
    "image" VARCHAR(255),
    "biograpy" TEXT,
    "slug" VARCHAR(255) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "userId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMedia" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "acessLink" VARCHAR(255) NOT NULL,
    "profileId" SMALLINT NOT NULL,

    CONSTRAINT "SocialMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "content" TEXT NOT NULL,
    "imgUrl" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "afterPost" VARCHAR(255),
    "beforePost" VARCHAR(255),
    "collectionId" SMALLINT,
    "profileId" INTEGER NOT NULL,
    "accountId" SMALLINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "content" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "postId" INTEGER,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(270),
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "imgUrl" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Webhook" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "headers" JSON,
    "events" JSON,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Webhook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "customerInvoiceData" TEXT NOT NULL,
    "groupTypeId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InGroup" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupType" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "membersMin" SMALLINT NOT NULL,
    "membersMax" SMALLINT NOT NULL,

    CONSTRAINT "GroupType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Software" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "details" TEXT NOT NULL,
    "acessLink" VARCHAR(255) NOT NULL,

    CONSTRAINT "Software_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "currentPrice" DECIMAL NOT NULL,
    "accountId" SMALLINT NOT NULL,
    "softwareId" SMALLINT NOT NULL,
    "groupTypeId" SMALLINT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionIncluded" (
    "id" SERIAL NOT NULL,
    "planId" SMALLINT NOT NULL,
    "optionId" SMALLINT NOT NULL,
    "dateAdd" DATE NOT NULL,
    "dateRemove" DATE NOT NULL,

    CONSTRAINT "OptionIncluded_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Include" (
    "id" SERIAL NOT NULL,
    "offerId" SMALLINT NOT NULL,
    "planId" SMALLINT NOT NULL,

    CONSTRAINT "Include_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "discountAmount" DECIMAL NOT NULL,
    "discountPercentage" DECIMAL NOT NULL,
    "durationMonths" SMALLINT NOT NULL,
    "durationEndDate" DATE NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prerequisite" (
    "id" SERIAL NOT NULL,
    "offerId" SMALLINT NOT NULL,
    "planId" SMALLINT NOT NULL,

    CONSTRAINT "Prerequisite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "customerData" TEXT NOT NULL,
    "subscriptionId" SMALLINT NOT NULL,
    "planHistoryId" SMALLINT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "amount" DECIMAL NOT NULL,
    "due" TIMESTAMP NOT NULL,
    "paid" TIMESTAMP NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanHistory" (
    "id" SERIAL NOT NULL,
    "subscriptionId" SMALLINT NOT NULL,
    "planId" SMALLINT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "groupId" SMALLINT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "subscribe" BOOLEAN NOT NULL DEFAULT false,
    "planId" SMALLINT NOT NULL,
    "ofterId" SMALLINT NOT NULL,
    "ofterStartDate" DATE NOT NULL,
    "ofterEndDate" DATE NOT NULL,
    "dateSubscribed" DATE NOT NULL,
    "dateUnsubscribed" DATE NOT NULL,
    "validUntil" DATE NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "timeCreated" TIMESTAMP NOT NULL,
    "timePaid" TIMESTAMP NOT NULL,
    "amount" DECIMAL NOT NULL,
    "amountPaid" DECIMAL NOT NULL,
    "taxAmount" DECIMAL NOT NULL,
    "statusId" SMALLINT NOT NULL,
    "userGroupTypeId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaleStatus" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
    "userGroupTypeId" SMALLINT NOT NULL,
    "saleId" SMALLINT NOT NULL,
    "productId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "inStock" DECIMAL NOT NULL,
    "productId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    "period" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
    "period" SMALLINT NOT NULL,
    "startTime" TIMESTAMP NOT NULL,
    "endTime" TIMESTAMP,
    "userGroupTypeId" INTEGER NOT NULL,
    "saleId" SMALLINT NOT NULL,
    "serviceId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OneTimeService" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL NOT NULL,
    "taxPercentage" DECIMAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OneTimeService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OneTimeServiceSale" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL NOT NULL,
    "taxAmount" DECIMAL NOT NULL,
    "userGroupTypeId" SMALLINT NOT NULL,
    "saleId" SMALLINT NOT NULL,
    "serviceId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OneTimeServiceSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "code" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "UF" CHAR(2) NOT NULL,
    "countryId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "zipCode" SMALLINT NOT NULL,
    "stateId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "email" VARCHAR(168) NOT NULL,
    "whatsApp" SMALLINT NOT NULL,
    "company" VARCHAR(255),
    "VAT_ID" VARCHAR(60),
    "cityId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "state" VARCHAR(100) NOT NULL,
    "zipCode" SMALLINT NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "number" SMALLINT NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "clientId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" SERIAL NOT NULL,
    "productSaleId" SMALLINT NOT NULL,
    "addressId" SMALLINT NOT NULL,
    "paymentTypeId" SMALLINT NOT NULL,
    "clientId" SMALLINT NOT NULL,
    "shipmentTypeId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShipmentType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShipmentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShipmentStatus" (
    "id" SERIAL NOT NULL,
    "shipmentId" SMALLINT NOT NULL,
    "time" TIMESTAMP NOT NULL,
    "notes" TEXT NOT NULL,
    "statusCatalogId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShipmentStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusCatalog" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StatusCatalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentDetails" (
    "id" SERIAL NOT NULL,
    "shipmentId" SMALLINT NOT NULL,
    "paymentDataId" SMALLINT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentData" (
    "id" SERIAL NOT NULL,
    "dataName" VARCHAR(255) NOT NULL,
    "dataType" VARCHAR(255) NOT NULL,
    "paymentTypeId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GroupTypeToSoftware" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_slug_key" ON "Profile"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialMedia_profileId_key" ON "SocialMedia"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_slug_key" ON "Collection"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSale_userGroupTypeId_key" ON "ProductSale"("userGroupTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_productId_key" ON "Stock"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceSale_userGroupTypeId_key" ON "ServiceSale"("userGroupTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "OneTimeServiceSale_userGroupTypeId_key" ON "OneTimeServiceSale"("userGroupTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPost_AB_unique" ON "_CategoryToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPost_B_index" ON "_CategoryToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupTypeToSoftware_AB_unique" ON "_GroupTypeToSoftware"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupTypeToSoftware_B_index" ON "_GroupTypeToSoftware"("B");

-- AddForeignKey
ALTER TABLE "sendNewlatter" ADD CONSTRAINT "sendNewlatter_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMedia" ADD CONSTRAINT "SocialMedia_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_groupTypeId_fkey" FOREIGN KEY ("groupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InGroup" ADD CONSTRAINT "InGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InGroup" ADD CONSTRAINT "InGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InGroup" ADD CONSTRAINT "InGroup_groupTypeId_fkey" FOREIGN KEY ("groupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_softwareId_fkey" FOREIGN KEY ("softwareId") REFERENCES "Software"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_groupTypeId_fkey" FOREIGN KEY ("groupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionIncluded" ADD CONSTRAINT "OptionIncluded_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionIncluded" ADD CONSTRAINT "OptionIncluded_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Include" ADD CONSTRAINT "Include_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Include" ADD CONSTRAINT "Include_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prerequisite" ADD CONSTRAINT "Prerequisite_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prerequisite" ADD CONSTRAINT "Prerequisite_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_planHistoryId_fkey" FOREIGN KEY ("planHistoryId") REFERENCES "PlanHistory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanHistory" ADD CONSTRAINT "PlanHistory_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanHistory" ADD CONSTRAINT "PlanHistory_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "SaleStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSale" ADD CONSTRAINT "ServiceSale_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSale" ADD CONSTRAINT "ServiceSale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSale" ADD CONSTRAINT "ServiceSale_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OneTimeServiceSale" ADD CONSTRAINT "OneTimeServiceSale_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OneTimeServiceSale" ADD CONSTRAINT "OneTimeServiceSale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OneTimeServiceSale" ADD CONSTRAINT "OneTimeServiceSale_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "OneTimeService"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupTypeToSoftware" ADD CONSTRAINT "_GroupTypeToSoftware_A_fkey" FOREIGN KEY ("A") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupTypeToSoftware" ADD CONSTRAINT "_GroupTypeToSoftware_B_fkey" FOREIGN KEY ("B") REFERENCES "Software"("id") ON DELETE CASCADE ON UPDATE CASCADE;
