/*
  Warnings:

  - You are about to drop the column `CNPJ` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_postId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "CNPJ",
DROP COLUMN "company",
DROP COLUMN "logo";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "postId",
ADD COLUMN     "accountId" SMALLINT NOT NULL;

-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL,
    "company" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(255) NOT NULL,
    "CNPJ" VARCHAR(100) NOT NULL,
    "accountId" SMALLINT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL,
    "whatsApp" VARCHAR(17) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "tel" VARCHAR(17) NOT NULL,
    "celular" VARCHAR(17) NOT NULL,
    "companyId" SMALLINT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_accountId_key" ON "Company"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_companyId_key" ON "Contact"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPost_AB_unique" ON "_CategoryToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPost_B_index" ON "_CategoryToPost"("B");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
