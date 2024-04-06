/*
  Warnings:

  - You are about to drop the column `userGroupId` on the `User` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `Webhook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userGroupId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userGroupId";

-- AlterTable
ALTER TABLE "UserGroup" ADD COLUMN     "userId" SMALLINT;

-- AlterTable
ALTER TABLE "Webhook" ADD COLUMN     "accountId" SMALLINT NOT NULL;

-- AddForeignKey
ALTER TABLE "Webhook" ADD CONSTRAINT "Webhook_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
