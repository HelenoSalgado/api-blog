/*
  Warnings:

  - You are about to drop the column `accountId` on the `Plan` table. All the data in the column will be lost.
  - Added the required column `planId` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_accountId_fkey";

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "planId" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "accountId";

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
