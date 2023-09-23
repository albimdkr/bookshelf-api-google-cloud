const DataBook = require('../dataBook');
const books = require('../books');
const { successRes, failRes, errorRes } = require('../response');

const editBookByIdHandler = (request, h) => {
    const { payload } = request;
    const { bookId } = request.params;
    const searchBook = books.get(bookId);

    if (payload.name === undefined) {
        const message = 'Gagal memperbarui buku. Mohon isi nama buku';
        return h.response(failRes({ messageRes: message, therIsData: false })).code(400);
    }

    if (payload.readPage > payload.pageCount) {
        const message = 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount';
        return h.response(failRes({ messageRes: message, therIsData: false })).code(400);
    }

    if (searchBook === undefined) {
        const message = 'Gagal memperbarui buku. Id tidak ditemukan';
        return h.response(failRes({ messageRes: message, therIsData: false })).code(404);
    }

    searchBook.updateBook(payload);
    const message = 'Buku berhasil diperbarui';
    return h.response(successRes({ messageRes: message })).code(200);
};

module.exports = { editBookByIdHandler };