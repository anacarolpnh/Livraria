import author from "../models/Author.js"; 

class authorController {

    static AuthorList = (req, res) => {
        author.find ((err, author) => {
            res.status(200).json(author);
        });
    };

    static SearchAuthor = (req, res) => {
        const id = req.params.id;
        author.findById(id, (err, author) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id nao localizado`})
            } else {
                res.status(200).send(author);
            }
        })
    }

    static AuthorRegister = (req, res) => {
        let authors = new author(req.body);
        authors.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao casdastrar Autor`});
            } else {
                res.status(201).send(authors.toJSON());
            }
        });
    };

    static AuthorUpdate = (req, res) => {
        const id = req.params.id;
        author.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor cadastrado com sucesso !!!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static AuthorDelet = (req, res) => {
        const id = req.params.id;
        author.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor deletado"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
};

export default authorController;