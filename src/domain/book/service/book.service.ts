import bookRepository, { Book } from '../model/book';
import * as ObjectUtils from '../../../utils/object.utils';
import { Errors } from '../../../error/errors';
import { ENTITY_NOT_FOUND } from '../../../error/error.messages';

class BookService {
  async createOne(reqBook: Book): Promise<Book> {
    return bookRepository.createOne(reqBook);
  }

  async findAll(): Promise<Book[]> {
    return bookRepository.findAll();
  }

  async findById(id: number): Promise<Book | null> {
    return bookRepository.findById(id);
  }

  async updateById(id: number, reqBook: Book): Promise<Book> {
    if (ObjectUtils.isEmpty(await this.findById(id))) {
      throw new Errors(ENTITY_NOT_FOUND, 400);
    }
    return bookRepository.updateById(id, reqBook);
  }

  async deleteById(id: number): Promise<Book> {
    if (ObjectUtils.isEmpty(await this.findById(id))) {
      throw new Errors(ENTITY_NOT_FOUND, 400);
    }
    return bookRepository.deleteById(id);
  }
}

export default new BookService();
