/* eslint-disable linebreak-style */
const DataBook = require('../dataBook');
const books = require('../books');
const { successRes, failRes, errorRes } = require('../response');

const addBookHandler = (request, h) => {
  try {
    const { payload } = request;
    if (payload.name === undefined) {
      const message = 'Gagal menambahkan buku. Mohon isi nama buku';
      return h.response(failRes({ messageRes: message, therIsData: false })).code(400);
    }
    if (payload.readPage > payload.pageCount) {
      const message = 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount';
      return h.response(failRes({ messageRes: message, therIsData: false })).code(400);
    }
    const newBook = new DataBook(payload);
    books.set(newBook.id, newBook);
    return h.response(successRes({ messageRes: 'Buku berhasil ditambahkan', dataRes: { bookId: newBook.id } })).code(201);
  } catch (error) {
    const message = 'Buku gagal ditambahkan';
    return h.response(errorRes(message)).code(500);
  }
};

module.exports = { addBookHandler };
