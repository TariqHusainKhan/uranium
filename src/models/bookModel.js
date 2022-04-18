const mongoose = require("mongoose");

const book_Schema = new mongoose.Schema( {
    bookName: {type:String,required:true },
    author_id: {type:Number},
    price:{type:Number},
    ratings:{type:Number}
}, { timestamps: true });



module.exports= mongoose.model('bookDetails', book_Schema) ;//users
