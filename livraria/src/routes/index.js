import express from "express";
import books from "./booksRouter.js";
import author from "./authorRouter.js";

const routes = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"});
    });

    app.use(
        express.json(),
        books, 
        author
    )
};

export default routes