import books from "../models/Book.js";

class bookController {

    static BookList = (req, res) => {
        books.find()
        .populate('author')
        .exec((err, books) => {
            res.status(200).json(books);
        });
    };

    static SearchBooks = (req, res) => {
        const id = req.params.id;
        books.findById(id)
        .populate('author', 'name')
         .exec((err, books) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id nao localizado`})
            } else {
                res.status(200).send(books);
            }
        })
    }

    static BookRegister = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao casdastrar Livro`});
            } else {
                res.status(201).send(book.toJSON());
            }
        });
    };

    static BookUpdate = (req, res) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Livro Cadastrado com sucesso !!!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static BookDelet = (req, res) => {
        const id = req.params.id;
        books.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Livro deletado"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static getBookbyCompany = (req, res) => {
        const company = req.query.company

        books.find({'company': company}, {}, (err, books) => {
            res.status(200).send(books);
        })
    }
};

export default bookController;