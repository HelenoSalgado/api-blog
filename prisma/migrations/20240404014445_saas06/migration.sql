/*
  Warnings:

  - You are about to drop the column `membersMax` on the `GroupType` table. All the data in the column will be lost.
  - You are about to drop the column `membersMin` on the `GroupType` table. All the data in the column will be lost.
  - You are about to drop the column `planId` on the `Include` table. All the data in the column will be lost.
  - You are about to drop the column `userGroupTypeId` on the `OneTimeServiceSale` table. All the data in the column will be lost.
  - You are about to drop the column `groupTypeId` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `userGroupTypeId` on the `ProductSale` table. All the data in the column will be lost.
  - You are about to drop the column `userGroupTypeId` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `userGroupTypeId` on the `ServiceSale` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OptionIncluded` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Prerequisite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GroupTypeToSoftware` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `postId` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `limitUsers` to the `GroupType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userGroupId` to the `GroupType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `limitUsers` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_groupTypeId_fkey";

-- DropForeignKey
ALTER TABLE "InGroup" DROP CONSTRAINT "InGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "InGroup" DROP CONSTRAINT "InGroup_userId_fkey";

-- DropForeignKey
ALTER TABLE "Include" DROP CONSTRAINT "Include_planId_fkey";

-- DropForeignKey
ALTER TABLE "OneTimeServiceSale" DROP CONSTRAINT "OneTimeServiceSale_userGroupTypeId_fkey";

-- DropForeignKey
ALTER TABLE "OptionIncluded" DROP CONSTRAINT "OptionIncluded_optionId_fkey";

-- DropForeignKey
ALTER TABLE "OptionIncluded" DROP CONSTRAINT "OptionIncluded_planId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_groupTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Prerequisite" DROP CONSTRAINT "Prerequisite_offerId_fkey";

-- DropForeignKey
ALTER TABLE "Prerequisite" DROP CONSTRAINT "Prerequisite_planId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSale" DROP CONSTRAINT "ProductSale_userGroupTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_userGroupTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceSale" DROP CONSTRAINT "ServiceSale_userGroupTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_groupId_fkey";

-- DropForeignKey
ALTER TABLE "_GroupTypeToSoftware" DROP CONSTRAINT "_GroupTypeToSoftware_A_fkey";

-- DropForeignKey
ALTER TABLE "_GroupTypeToSoftware" DROP CONSTRAINT "_GroupTypeToSoftware_B_fkey";

-- DropIndex
DROP INDEX "OneTimeServiceSale_userGroupTypeId_key";

-- DropIndex
DROP INDEX "ProductSale_userGroupTypeId_key";

-- DropIndex
DROP INDEX "ServiceSale_userGroupTypeId_key";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "postId" SET NOT NULL;

-- AlterTable
ALTER TABLE "GroupType" DROP COLUMN "membersMax",
DROP COLUMN "membersMin",
ADD COLUMN     "limitUsers" SMALLINT NOT NULL,
ADD COLUMN     "userGroupId" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "Include" DROP COLUMN "planId";

-- AlterTable
ALTER TABLE "OneTimeServiceSale" DROP COLUMN "userGroupTypeId";

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "groupTypeId",
ADD COLUMN     "limitUsers" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "ProductSale" DROP COLUMN "userGroupTypeId";

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "userGroupTypeId",
ADD COLUMN     "storeId" INTEGER;

-- AlterTable
ALTER TABLE "ServiceSale" DROP COLUMN "userGroupTypeId";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "groupId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "InGroup";

-- DropTable
DROP TABLE "Option";

-- DropTable
DROP TABLE "OptionIncluded";

-- DropTable
DROP TABLE "Prerequisite";

-- DropTable
DROP TABLE "_GroupTypeToSoftware";

-- CreateTable
CREATE TABLE "UserGroup" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "userId" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
    "userGroupTypeId" SMALLINT,
    "productSaleId" INTEGER,
    "serviceSaleId" INTEGER,
    "oneTimeServiceSaleId" INTEGER,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupType" ADD CONSTRAINT "GroupType_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_userGroupTypeId_fkey" FOREIGN KEY ("userGroupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_productSaleId_fkey" FOREIGN KEY ("productSaleId") REFERENCES "ProductSale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_serviceSaleId_fkey" FOREIGN KEY ("serviceSaleId") REFERENCES "ServiceSale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_oneTimeServiceSaleId_fkey" FOREIGN KEY ("oneTimeServiceSaleId") REFERENCES "OneTimeServiceSale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE SET NULL ON UPDATE CASCADE;
