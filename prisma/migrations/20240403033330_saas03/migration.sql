/*
  Warnings:

  - You are about to drop the column `groupTypeId` on the `InGroup` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "InGroup" DROP CONSTRAINT "InGroup_groupTypeId_fkey";

-- AlterTable
ALTER TABLE "InGroup" DROP COLUMN "groupTypeId";
