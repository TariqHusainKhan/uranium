const authorModel = require("../models/authorModel.js");
const books = require("../models/books.js");

// creating database collection for Author

const createAuthor = async function(req,res){
    const authorData=req.body;
    const saveData = await authorModel.create(authorData);
    res.send({msg:saveData})
}

// Craeating Database collection for Books

const createBooks = async function(req,res){
    const booksData = req.body;
    const Data = await books.create(booksData);
res.send({msg:Data});
}

 module.exports.createAuthor = createAuthor;
 module.exports.createBooks = createBooks;
