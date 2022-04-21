const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const midGlb = function(req,res,next)
{
    console.log("Hi, I am in the global Miiddleware");
  next();
}


const assignmentMw = function (req,res,next)
{
    var currentDate = new Date();
    var dateTime =currentDate.getDate()+" "
                  + (currentDate.getMonth()+1) + " "
                  +currentDate.getFullYear()+ " "
                  +currentDate.getHours()+ ": "
                  +currentDate.getMinutes()+ " "
                  currentDate.getSeconds();

                  let ip =req.ip;
                  let url = req.originalUrl;
                  console.log(`${dateTime} ${ip} ${url}`);
                  next();
}
app.use(assignmentMw);


mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/TariqHusainKhanDB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
