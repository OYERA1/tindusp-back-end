-- CreateEnum
CREATE TYPE "Schools" AS ENUM ('EACH', 'ECA', 'EEFE', 'EE', 'Poli', 'FAU', 'FCF', 'FD', 'FEA', 'FE', 'FFLCH', 'FM', 'FMVZ', 'FO', 'FSP', 'IAG', 'IB', 'ICB', 'IEE', 'IEA', 'IEB', 'IF', 'IGc', 'IME', 'IMT', 'IP', 'IQ', 'IRI', 'IIO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "school" "Schools" NOT NULL,
    "nusp" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
