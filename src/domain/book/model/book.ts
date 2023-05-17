import { prisma } from '../../../database/database';
import type { Book } from '@prisma/client';

class BookRepository {
  async createOne(reqBook: Book): Promise<Book> {
    return prisma.book.create({
      data: {
        name: reqBook?.name,
        author: reqBook?.author,
      },
    });
  }

  async findAll(): Promise<Book[]> {
    return prisma.book.findMany();
  }

  async findById(id: number): Promise<Book | null> {
    return prisma.book.findUnique({
      where: { id },
    });
  }

  async updateById(id: number, reqBook: Book): Promise<Book> {
    return prisma.book.update({
      where: { id },
      data: {
        name: reqBook?.name,
        author: reqBook?.author,
      },
    });
  }

  async deleteById(id: number): Promise<Book> {
    return prisma.book.delete({
      where: { id },
    });
  }
}

export default new BookRepository();
export { Book };
