-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_accountId_fkey";

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
