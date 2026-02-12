"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.book = void 0;
const book = {
    tags: ['Books'],
    description: 'Create a book to our library',
    operationId: 'book',
    responses: {
        '201': {
            description: 'List of books',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                example: 'Book name',
                            },
                            author: {
                                type: 'string',
                                example: 'author name',
                            },
                            available: {
                                type: 'boolean',
                                example: true,
                            },
                            price: {
                                type: 'string',
                                example: '$15',
                            }
                        },
                    },
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal Server Error',
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.book = book;
