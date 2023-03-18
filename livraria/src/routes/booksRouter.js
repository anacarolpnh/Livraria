import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router
    .get("/books", bookController.BookList)
    .get("/books/search", bookController.getBookbyCompany)
    .get("/books/:id", bookController.SearchBooks)
    .post("/books", bookController.BookRegister)
    .put("/books/:id", bookController.BookUpdate)
    .delete("/books/:id", bookController.BookDelet)

export default router;