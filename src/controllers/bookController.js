const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body;

    let savedData= await BookModel.create(data);
    res.send({msg: savedData});
}

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  );
//     res.send({data: allBooks,msg:"data  fetch"});
// }
const getBooksData= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}
//12 April Assignment

//Query 1- Gives all the books with only bookName and authorName
const bookList = async function (req,res){
    let data=req.body;
let allBooks = await BookModel.find(data).select({ bookName: true, authorName: true,_id:0});
res.send({msg: allBooks});
};

//Query 2- getBooksInYear: takes year as input in post request and gives list of all books published that year

const getBooksInYear = async function (req,res){  
let yr=req.body;
let allBooksinYear = await BookModel.find({ year:yr});
res.send({msg: allBooksinYear});
};

//Query 3- getParticularBooks:- take any input and use it as a condition to fetch books that satisfy that condition

const getParticularBooks = async function(req,res)
{
  let condition = req.body;
  let particularBooks = await BookModel.find(condition);

  res.send(particularBooks);
}

// Query 4- getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const getXINRBooks = async function(req,res){
    let XinrBooks = await BookModel.find({"prices.indianPrice" : {$in:["100INR", "200INR","500INR"]}} )
         res.send({msg : XinrBooks});
}

// Query 5- getRandomBooks - returns books that are available in stock or have more than 500 pages 
 
const getRandomBooks = async function(req,res){
    let randomBooks = await BookModel.find({ $or :[ {totalPages:{ $gt: 500   }},{stockAvailable:true}]})
    res.send({msg:  randomBooks})
}


module.exports.createBook= createBook ;
module.exports.getBooksData= getBooksData;

module.exports.bookList= bookList ;
module.exports.getBooksInYear= getBooksInYear ;
module.exports.getParticularBooks= getParticularBooks ;
module.exports.getXINRBooks= getXINRBooks ;
module.exports.getRandomBooks= getRandomBooks ;








