/*
  Warnings:

  - You are about to drop the column `role` on the `GroupType` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `InGroup` table. All the data in the column will be lost.
  - Added the required column `name` to the `GroupType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InGroup" DROP CONSTRAINT "InGroup_groupId_fkey";

-- AlterTable
ALTER TABLE "GroupType" DROP COLUMN "role",
ADD COLUMN     "name" VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE "InGroup" DROP COLUMN "groupId";
