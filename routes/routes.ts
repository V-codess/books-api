import express from "express";
import {getAllBooks, addBook, editBook, getById, deleteBook, getBooksPagination} from "../controllers/bookShelf";
const router = express.Router();

router.get('/allBooks', getAllBooks);
router.get('/books', getBooksPagination)
router.get('/books/:id', getById);
router.post('/add-book',addBook);
router.patch('/edit-book/:id',editBook);
router.delete('/delete-book/:id', deleteBook)
export default router;
