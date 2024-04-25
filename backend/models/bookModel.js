import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        },
    }
);

export const bookModel = mongoose.model('book', bookSchema);