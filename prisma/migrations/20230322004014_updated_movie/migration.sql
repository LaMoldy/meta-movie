-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "director" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "imageUrl" SET DEFAULT '';
