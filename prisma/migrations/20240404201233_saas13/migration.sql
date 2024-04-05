/*
  Warnings:

  - You are about to drop the column `userGroupTypeId` on the `Store` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_userGroupTypeId_fkey";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "userGroupTypeId",
ADD COLUMN     "groupTypeId" INTEGER,
ADD COLUMN     "planId" SMALLINT;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_groupTypeId_fkey" FOREIGN KEY ("groupTypeId") REFERENCES "GroupType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
