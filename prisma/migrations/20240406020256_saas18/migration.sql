/*
  Warnings:

  - You are about to drop the `_CategoryToPost` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `postId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_B_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "postId" SMALLINT NOT NULL;

-- DropTable
DROP TABLE "_CategoryToPost";

-- CreateTable
CREATE TABLE "ViewsAndLikes" (
    "id" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "unlikes" INTEGER NOT NULL,
    "idPost" SMALLINT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ViewsAndLikes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ViewsAndLikes_idPost_key" ON "ViewsAndLikes"("idPost");

-- AddForeignKey
ALTER TABLE "ViewsAndLikes" ADD CONSTRAINT "ViewsAndLikes_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
