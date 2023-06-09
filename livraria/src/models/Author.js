import mongoose from "mongoose"

const authorSchema = new mongoose.Schema (
    {
        id: { type: String },
        name: { type: String, required: true },
        nationality: { type: String }
    }
)

const author = mongoose.model('author', authorSchema);

export default author;