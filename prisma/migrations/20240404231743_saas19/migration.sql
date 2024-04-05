/*
  Warnings:

  - You are about to drop the column `groupTypeId` on the `Client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_groupTypeId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "groupTypeId";
