/*
  Warnings:

  - Added the required column `name` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UF` to the `State` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `State` table without a default value. This is not possible if the table is not empty.
  - Made the column `firstName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "name" VARCHAR(100) NOT NULL,
ADD COLUMN     "zipCode" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "State" ADD COLUMN     "UF" VARCHAR(5) NOT NULL,
ADD COLUMN     "name" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL;
