/*
  Warnings:

  - A unique constraint covering the columns `[destination]` on the table `Bus` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bus_destination_key" ON "Bus"("destination");
