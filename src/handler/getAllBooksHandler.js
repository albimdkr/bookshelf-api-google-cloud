/* eslint-disable linebreak-style */
/* eslint-disable default-case */
/* eslint-disable consistent-return */
const books = require('../books');
const { successRes } = require('../response');

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  const allBooks = [...books.values()];
  let searchBook = allBooks;

  switch (true) {
    case name !== undefined:
      // eslint-disable-next-line max-len
      searchBook = allBooks.filter((masukan) => masukan.name.toLowerCase().includes(name.toLowerCase()));
      break;
    case reading !== undefined:
      searchBook = allBooks.filter((masukan) => masukan.reading === (reading === '1'));
      break;
    case finished !== undefined:
      searchBook = allBooks.filter((masukan) => masukan.finished === (finished === '1'));
      break;
  }

  const result = searchBook.map((masukanBook) => masukanBook.getIdNamePublisher());
  return h.response(successRes({ dataRes: { books: result } })).code(200);
};

module.exports = { getAllBooksHandler };
