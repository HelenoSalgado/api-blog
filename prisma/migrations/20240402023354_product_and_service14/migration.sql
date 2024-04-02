-- AlterTable
ALTER TABLE "GroupType" ADD COLUMN     "accountId" INTEGER;

-- AddForeignKey
ALTER TABLE "GroupType" ADD CONSTRAINT "GroupType_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
