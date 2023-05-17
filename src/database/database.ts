import { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient;

export const connect = async () => {
  try {
    prisma = new PrismaClient();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
