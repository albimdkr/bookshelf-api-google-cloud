const { addBookHandler } = require ('./handler/addBookHandler');
const { getAllBooksHandler } = require ('./handler/getAllBooksHandler');
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
    }
];

module.exports = routes;