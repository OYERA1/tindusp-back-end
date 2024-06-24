/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "latidude" TEXT,
ADD COLUMN     "longitude" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "matchFirstUserId" TEXT NOT NULL,
    "matchSecondUserId" TEXT NOT NULL,
    "matchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Match_matchFirstUserId_matchSecondUserId_key" ON "Match"("matchFirstUserId", "matchSecondUserId");

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_matchFirstUserId_fkey" FOREIGN KEY ("matchFirstUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_matchSecondUserId_fkey" FOREIGN KEY ("matchSecondUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
