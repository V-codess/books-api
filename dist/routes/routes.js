"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookShelf_1 = require("../controllers/bookShelf");
const router = express_1.default.Router();
router.get('/allBooks', bookShelf_1.getAllBooks);
router.get('/books', bookShelf_1.getBooksPagination);
router.get('/books/:id', bookShelf_1.getById);
router.post('/add-book', bookShelf_1.addBook);
router.patch('/edit-book/:id', bookShelf_1.editBook);
router.delete('/delete-book/:id', bookShelf_1.deleteBook);
exports.default = router;
