/*
  Warnings:

  - You are about to drop the column `userId` on the `UserGroup` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserGroup" DROP CONSTRAINT "UserGroup_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userGroupId" SMALLINT;

-- AlterTable
ALTER TABLE "UserGroup" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
