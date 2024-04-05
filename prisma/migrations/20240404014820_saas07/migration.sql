/*
  Warnings:

  - You are about to drop the column `userGroupId` on the `GroupType` table. All the data in the column will be lost.
  - Added the required column `groupTypeId` to the `UserGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GroupType" DROP CONSTRAINT "GroupType_userGroupId_fkey";

-- AlterTable
ALTER TABLE "GroupType" DROP COLUMN "userGroupId";

-- AlterTable
ALTER TABLE "UserGroup" ADD COLUMN     "groupTypeId" SMALLINT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_groupTypeId_fkey" FOREIGN KEY ("groupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
