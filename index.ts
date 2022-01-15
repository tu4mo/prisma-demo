import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.create({
    data: {
      title: "Todo",
    },
  });

  const todos = await prisma.todo.findMany();
  console.log(todos);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
