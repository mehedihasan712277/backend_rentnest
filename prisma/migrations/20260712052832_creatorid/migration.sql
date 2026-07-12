/*
  Warnings:

  - A unique constraint covering the columns `[creatorId]` on the table `amenities` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorId` to the `amenities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "amenities" ADD COLUMN     "creatorId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "amenities_creatorId_key" ON "amenities"("creatorId");

-- AddForeignKey
ALTER TABLE "amenities" ADD CONSTRAINT "amenities_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
