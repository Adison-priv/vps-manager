/*
  Warnings:

  - You are about to drop the column `name` on the `Server` table. All the data in the column will be lost.
  - Added the required column `hostname` to the `Server` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Server" DROP COLUMN "name",
ADD COLUMN     "cpuCores" INTEGER,
ADD COLUMN     "diskTotal" TEXT,
ADD COLUMN     "hostname" TEXT NOT NULL,
ADD COLUMN     "os" TEXT,
ADD COLUMN     "ramTotal" INTEGER,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "status" TEXT;
