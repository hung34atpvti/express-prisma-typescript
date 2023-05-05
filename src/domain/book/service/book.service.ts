import bookRepository, { Book } from "../model/book";
import * as ObjectUtils from "../../../utils/object.utils";

class BookService {
  async createOne(reqBook: Book): Promise<Book> {
    return bookRepository.createOne(reqBook);
  }

  async findAll(): Promise<Book[]> {
    return bookRepository.findAll();
  }

  async findById(id: number): Promise<Book> {
    return bookRepository.findById(id);
  }

  async updateById(id: number, reqBook: Book): Promise<Book> {
    if (ObjectUtils.isEmpty(await this.findById(id))) {
      throw new Error("Book not found");
    }
    return bookRepository.updateById(id, reqBook);
  }

  async deleteById(id: number): Promise<Book> {
    if (ObjectUtils.isEmpty(await this.findById(id))) {
      throw new Error("Book not found");
    }
    return bookRepository.deleteById(id);
  }
}

export default new BookService();
