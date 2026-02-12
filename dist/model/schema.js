"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    genre: {
        type: String,
        enum: {
            values: ["suspense", "horror", 'sci-fi', 'comedy', 'romance', 'action', 'education']
        }
    },
    available: {
        type: Boolean,
    },
    price: {
        type: String,
    },
    image: {
        type: String
    },
    id: {
        type: String,
    },
}, { timestamps: true, versionKey: false });
bookSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
});
const books = (0, mongoose_1.model)('books', bookSchema);
exports.default = books;
