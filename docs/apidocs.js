"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDocumentation = void 0;
const createBook_1 = require("./createBook");
const getBooks_1 = require("./getBooks");
const updateBook_1 = require("./updateBook");
const apiDocumentation = {
    openapi: '3.0.1',
    info: {
        version: '1.3.0',
        title: 'Library - Documentation',
        description: 'This is my library and we have collection of books!',
        contact: {
            name: 'Vaishnavi Vadlamudi',
            email: 'dev@example.com',
            url: 'https://devwebsite.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    servers: [
        {
            url: 'http://localhost:8080/',
            description: 'Local Server',
        }
    ],
    tags: [
        {
            name: 'Add book',
        },
    ],
    paths: {
        '/add-book': {
            post: createBook_1.createBook,
        },
        '/books': {
            get: getBooks_1.book,
        },
        '/edit-book/{id}': {
            patch: updateBook_1.updateBook,
        },
    },
    components: {
        schemas: {
            createBookBody: createBook_1.createBookBody,
            updateBookBody: updateBook_1.updateBookBody
        },
    },
};
exports.apiDocumentation = apiDocumentation;
