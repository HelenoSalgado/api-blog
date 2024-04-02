/*
  Warnings:

  - You are about to alter the column `description` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(270)`.
  - You are about to alter the column `zipCode` on the `City` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to drop the column `name` on the `GroupType` table. All the data in the column will be lost.
  - You are about to alter the column `membersMin` on the `GroupType` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `UF` on the `State` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5)` to `Char(2)`.
  - You are about to alter the column `url` on the `Webhook` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'EDITOR', 'BUSINES');

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "description" SET DATA TYPE VARCHAR(270);

-- AlterTable
ALTER TABLE "City" ALTER COLUMN "zipCode" SET DATA TYPE SMALLINT;

-- AlterTable
ALTER TABLE "GroupType" DROP COLUMN "name",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "membersMin" SET DATA TYPE SMALLINT;

-- AlterTable
ALTER TABLE "Plan" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "State" ALTER COLUMN "UF" SET DATA TYPE CHAR(2);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Webhook" ALTER COLUMN "url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "headers" SET DATA TYPE JSON,
ALTER COLUMN "events" SET DATA TYPE JSON;
