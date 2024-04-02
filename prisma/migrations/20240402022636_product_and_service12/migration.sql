/*
  Warnings:

  - Added the required column `groupTypeId` to the `InGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InGroup" ADD COLUMN     "groupTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "InGroup" ADD CONSTRAINT "InGroup_groupTypeId_fkey" FOREIGN KEY ("groupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
