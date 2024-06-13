import { PrismaClient } from "@prisma/client";
import { userData } from "./seed-data/userData";
import { productData } from "./seed-data/productData";

const prisma = new PrismaClient();

/**
 * Seed database with mockdata
 */
async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const model = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${model.id}`);
  }
  for (const p of productData) {
    const model = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${model.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
