import express from "express";
import {getAllBooks, addBook, editBook, getById, deleteBook} from "../controllers/bookShelf";
import {upload} from "../utils/uploads"
const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getById);
router.post('/add-book', upload.single("image"),addBook);
router.patch('/edit-book/:id', upload.single("image"),editBook);
router.delete('/delete-book/:id', deleteBook)
export default router;
