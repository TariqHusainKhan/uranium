const mongoose = require('mongoose');



const author_Schema = new mongoose.Schema( {
    author_id: {type:Number,required:true },
    author_name: {type:String}, 
    age:{type:Number},
    address: {type:String}
}, { timestamps: true });


module.exports = mongoose.model("authorDetails",author_Schema) //users

 


