-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_accountId_fkey";

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "groupTypeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_groupTypeId_fkey" FOREIGN KEY ("groupTypeId") REFERENCES "GroupType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
