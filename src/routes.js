const { addBookHandler } = require ('./handler/addBookHandler');
const { getAllBooksHandler } = require ('./handler/getAllBooksHandler');
const { getBookByIdHandler } = require ('./handler/getBookByIdHandler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    }
];

module.exports = routes;