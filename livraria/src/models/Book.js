import mongoose from "mongoose"

const bookSchema = new mongoose.Schema (
    {
        id: { type: String },
        title: { type: String, required: true },
        author:{ type: mongoose.Schema.Types.ObjectId, ref: 'author', required: true },
        company:{ type: String, required: true },
        numberPag:{ type: Number},
    }
)

const books = mongoose.model('books', bookSchema);

export default books;