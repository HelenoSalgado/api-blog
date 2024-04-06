-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_accountId_fkey";

-- DropIndex
DROP INDEX "Company_accountId_key";

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
