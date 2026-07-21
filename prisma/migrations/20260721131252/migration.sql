/*
  Warnings:

  - A unique constraint covering the columns `[propertyId]` on the table `rentals` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "rentals_propertyId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "rentals_propertyId_key" ON "rentals"("propertyId");
