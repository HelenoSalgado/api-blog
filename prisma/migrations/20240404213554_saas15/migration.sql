/*
  Warnings:

  - You are about to drop the column `state` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `cityId` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `groupTypeId` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zone` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_stateId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_groupTypeId_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "state",
ADD COLUMN     "city" VARCHAR(168) NOT NULL,
ADD COLUMN     "stateId" SMALLINT NOT NULL,
ADD COLUMN     "zone" VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "cityId",
DROP COLUMN "groupTypeId",
ADD COLUMN     "accountId" SMALLINT NOT NULL;

-- DropTable
DROP TABLE "City";

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;
