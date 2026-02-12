"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooksPagination = exports.deleteBook = exports.getById = exports.editBook = exports.addBook = exports.getAllBooks = void 0;
const express_1 = __importDefault(require("express"));
const schema_1 = __importDefault(require("../model/schema"));
const app = (0, express_1.default)();
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBook = yield schema_1.default.find();
        return res.status(200).json({ "message": getBook });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllBooks = getAllBooks;
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, genre, available, price, image } = req.body;
        const searchBook = yield schema_1.default.findOne({ title: title });
        if (searchBook) {
            throw "Book Already found";
        }
        const highestBook = yield schema_1.default.findOne().sort({ id: -1 });
        let currentID = highestBook ? Number(highestBook.id) + 1 : 0;
        const adding = yield schema_1.default.create({
            title: title,
            price: price,
            author: author,
            genre: genre,
            available: available,
            id: currentID,
        });
        return res.status(200).json({ "message": "Book added", "books": adding });
    }
    catch (error) {
        return res.status(400).json({ "message": "error adding this book", error });
    }
});
exports.addBook = addBook;
const editBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let imageUrl;
        if (req.file) {
            imageUrl = req.file.filename;
        }
        const updateBook = yield schema_1.default.findOneAndUpdate({ id: id }, Object.assign(Object.assign({}, req.body), { image: imageUrl }));
        if (!updateBook) {
            throw `There is no book with the id : ${id}`;
        }
        return res.status(201).json({ "message": "Book updated, please check the get request" });
    }
    catch (error) {
        return res.status(400).json({ "message": "error editing this book", error });
    }
});
exports.editBook = editBook;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const oneBook = yield schema_1.default.findOne({ id: id });
        if (!oneBook) {
            throw `Oops! No book with this id: ${id}`;
        }
        return res.status(200).json({ "message": "Here is your book", "book": oneBook });
    }
    catch (error) {
        return res.status(400).json({ "message": "error finding the book by this id", error });
    }
});
exports.getById = getById;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield schema_1.default.deleteOne({ id: id });
        if (book.deletedCount > 0) {
            return res.status(200).json({ "message": `Book with the ${id} got deleted` });
        }
        return res.status(200).json({ message: `No book with the id ${id}` });
    }
    catch (error) {
        return res.status(400).json({ "message": "error finding the book by this id", error });
    }
});
exports.deleteBook = deleteBook;
const getBooksPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit, title, author, genre, available } = req.query;
        const pageNum = Number(page) || 1;
        const limits = Number(limit) || 5;
        const skip = (pageNum - 1) * limits;
        const filter = {};
        if (title) {
            filter.title = { $regex: title, $options: "i" };
        }
        if (author) {
            filter.author = { $regex: author, $options: "i" };
        }
        if (genre) {
            filter.genre = { $regex: genre, $options: "i" };
        }
        if (available) {
            filter.available = available === "true";
        }
        const total = yield schema_1.default.countDocuments(filter);
        const books = yield schema_1.default.find(filter)
            .skip(skip)
            .limit(limits);
        return res.status(200).json({
            data: books,
            total,
            page: pageNum,
            totalPages: Math.ceil(total / limits),
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});
exports.getBooksPagination = getBooksPagination;
