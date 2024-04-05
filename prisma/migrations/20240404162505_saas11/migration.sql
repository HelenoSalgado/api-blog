/*
  Warnings:

  - You are about to drop the `StatusCatalog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShipmentStatus" DROP CONSTRAINT "ShipmentStatus_statusCatalogId_fkey";

-- DropTable
DROP TABLE "StatusCatalog";

-- CreateTable
CREATE TABLE "ShipmentStatusCatalog" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShipmentStatusCatalog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShipmentStatus" ADD CONSTRAINT "ShipmentStatus_statusCatalogId_fkey" FOREIGN KEY ("statusCatalogId") REFERENCES "ShipmentStatusCatalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
