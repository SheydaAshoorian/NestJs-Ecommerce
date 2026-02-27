/*
  Warnings:

  - You are about to drop the column `seller_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Seller` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nationalCode]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Seller` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_seller_id_fkey";

-- DropIndex
DROP INDEX "Seller_email_key";

-- DropIndex
DROP INDEX "Seller_phone_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "seller_id";

-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "email",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "phone",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "bankAccount" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "nationalCode" TEXT,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Seller_user_id_key" ON "Seller"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_nationalCode_key" ON "Seller"("nationalCode");

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
