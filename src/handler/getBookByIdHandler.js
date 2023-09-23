const DataBook = require('../dataBook');
const books = require('../books');
const { successRes, failRes, errorRes } = require('../response');

const getBookByIdHandler = ( request, h) => {
    const { bookId } = request.params;
    const bookById = books.get(bookId);
    if (bookId !== undefined) {
        if(bookById === undefined) {
            const message = 'Buku tidak ditemukan';
            return h.response(failRes({ messageRes: message })).code(404);
        }
        return h.response(successRes({ dataRes: { book: bookById }})).code(200);
    }
};


module.exports = { getBookByIdHandler };