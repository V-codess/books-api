import { createBook, createBookBody } from './createBook';
import {book} from "./getBooks"
import { updateBook , updateBookBody} from './updateBook';
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
        post: createBook,
      },
      '/books': {
        get: book,
      },
      '/edit-book/{id}': {
        patch: updateBook,
      },
    },
    components: {
      schemas: {
        createBookBody,
        updateBookBody
      },
    },
  };
  
  export { apiDocumentation };