/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `provider` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordToken` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "isAdmin",
DROP COLUMN "password",
DROP COLUMN "provider",
DROP COLUMN "resetPasswordToken";

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "logo" DROP NOT NULL,
ALTER COLUMN "CNPJ" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" DROP NOT NULL;
