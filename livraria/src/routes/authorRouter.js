import express from "express";
import authorController from "../controllers/authorController.js";

const router = express.Router();

router
    .get("/author", authorController.AuthorList)
    .get("/author/:id", authorController.SearchAuthor)
    .post("/author", authorController.AuthorRegister)
    .put("/author/:id", authorController.AuthorUpdate)
    .delete("/author/:id", authorController.AuthorDelet)

export default router;