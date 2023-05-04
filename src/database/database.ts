import { PrismaClient } from "@prisma/client";

export let prisma: any;

export const connect = async () => {
  try {
    prisma = new PrismaClient();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
