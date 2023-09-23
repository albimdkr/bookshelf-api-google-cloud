const DataBook = require('../dataBook');
const books = require('../books');
const { successRes, failRes, errorRes } = require('../response');


const deleteBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
    const searchBook = books.get(bookId);
    if (searchBook === undefined) {
        const message = 'Buku gagal dihapus. Id tidak ditemukan';
        return h.response(failRes({ messageRes: message, therIsData: false })).code(404);
    }

    books.delete(bookId);
    const message = 'Buku berhasil dihapus';
    return h.response(successRes({ responseMessage: message})).code(200);
}

module.exports = { deleteBookByIdHandler };