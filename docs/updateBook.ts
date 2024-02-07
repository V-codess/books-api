const updateBook = {
    tags: ['Books'],
    description: 'Create a book to our library',
    operationId: 'updateBook',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/updateBookBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '201': {
        description: 'Book created successfully!',
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
  const updateBookBody = {
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
        },
        createdAt: {
          type: 'string',
          example: '2021-03-20T19:40:59.495Z',
        },
        updatedAt: {
          type: 'string',
          example: '2021-03-20T21:23:10.879Z',
        },
      },
  };
  
  export { updateBook, updateBookBody };