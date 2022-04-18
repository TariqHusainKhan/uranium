const authorModel = require("../models/authorsModel.js");
const bookModel = require("../models/bookModel.js");

//Query #1 : Create APIs for both books and authors ---> If author_id is not available then do not accept the
// entry(in neither the author collection nor the books collection)

// Collection creation for Authors (authorDetails)
const createNewAuthor = async function(req,res)
{
    const reqAuthor = req.body;
    const savedData = await authorModel.create(reqAuthor);
    res.send({msg: savedData});
}  

// Collection creation for Books
const createNewBook = async function(req,res)
{
    const reqBook = req.body;
    const saved = await bookModel.create(reqBook);
    res.send({msg: saved});
}  

// Showing all the elements in Authors collection
const allAuthors = async function(req,res)
{
    const authorsDetail = await authorModel.find();
    res.send({msg: authorsDetail});
}  

// Showing all the elements in Books collection

const allBooks = async function(req,res)
{
    const booksDetail = await bookModel.find();
    res.send({msg: booksDetail});
} 

// Query #2 : List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find
    // the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const listBooks = async function(req,res)
{
    const authorsData = await authorModel.find({author_name:"Chetan Bhagat"});
    const id = authorsData[0].author_id; // author_id is same in all the docs
    const booksName = await bookModel.find({author_id:id}).select({bookName:1,_id:0});
    res.send({msg:booksName})
}

// Query #3 : find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price
// in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query
// author_id from previous query)

const changeBookPrice = async function(req,res)
{
    const books = await bookModel.find({bookName:"Two states" });
    const id = books[0].author_id;
    const authorName = await authorModel.find({author_id:id}).select({author_name:1,_id:0});
    const book_name = books[0].bookName;
    const updatedPrice = await bookModel.findOneAndUpdate({bookName:book_name},{price:100},{new:true}).select({price:1,_id:0}); 
    res.send({msg:authorName,updatedPrice});
}

//Query # 4: Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names 
//of respective books.. 

const authorsName = async function(req,res)
{
    const booksId = await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0});
    const id = booksId.map(inp => inp.author_id);
    let temp = [];
    for(let i=0;i<id.length;i++)
    {
        let x=id[i];
        const author = await authorModel.find({author_id:x}).select({author_name:1,_id:0});
        temp.push(author);
    }
    const authorName = temp.flat();

    res.send({msg:authorName});
}

module.exports.createNewAuthor = createNewAuthor;
module.exports.createNewBook = createNewBook;
module.exports.allAuthors = allAuthors ;
module.exports.allBooks = allBooks;
module.exports.listBooks = listBooks;
module.exports.changeBookPrice = changeBookPrice;
module.exports.authorsName = authorsName;

