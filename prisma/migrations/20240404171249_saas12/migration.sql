/*
  Warnings:

  - You are about to drop the column `limitUsers` on the `GroupType` table. All the data in the column will be lost.
  - Added the required column `limitUsers` to the `UserGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planId` to the `UserGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GroupType" DROP COLUMN "limitUsers";

-- AlterTable
ALTER TABLE "UserGroup" ADD COLUMN     "limitUsers" SMALLINT NOT NULL,
ADD COLUMN     "planId" SMALLINT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
