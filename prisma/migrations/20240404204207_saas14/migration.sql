-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "groupTypeId" SMALLINT;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_groupTypeId_fkey" FOREIGN KEY ("groupTypeId") REFERENCES "GroupType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
