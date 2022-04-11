const express = require('express');
const router = express.Router();
const randomController= require("../controllers/randomController.js");
// Problem 1

router.get('/movies', function (req, res) 
{
const Array =["Spiderman","Batman","Superman","Pk","3Idiots","Deadpol","War"];
    res.send(Array);
});
// Problem 2,3
router.get('/movies/:indexOfArray', function (req, res)
 {
    const Array =["Spiderman","Batman","Superman","Pk","3Idiots","Deadpol","War"];
    const index =req.params.indexOfArray;
    if(index < Array.length)
    {
      res.send(Array[index]);
    }
    else
     {
        res.send("Invalid Index,Please use Valid Index!");
     }
    });

// Problem 4
router.get('/films', function (req, res) 
{
     
    const Array =[{id:1,name:"Spiderman"},{id:2,name:"Batman"},
    {id:3,name:"Superman"},{id:4,name:"Pk"},{id:5,name:"3Idiots"},{id:6,name:"Deadpol"},{id:7,name:"War"}];
         
       res.send(Array);
});
      
// Problem 5
router.get('/films/:filmId', function (req, res) 
{
    const Array =[{id:1,name:"Spiderman"},{id:2,name:"Batman"},
    {id:3,name:"Superman"},{id:4,name:"Pk"},{id:5,name:"3Idiots"},{id:6,name:"Deadpol"},{id:7,name:"War"}]; 
    let index=req.params.filmId;
    console.log(index)
   for(let i=0;i<Array.length;i++)
   {  
    console.log(Array[i])

        if(  index === Array[i].id )
          { 
              console.log(Array[i])
              return res.send(Array[i]); 

          }

           
    }
    
   return res.send("Invalid index");
  
});

///8 APRIL DAY ASSIGNMENt



router.get("/missingElement1",function(req,res){
    const arr1=[1,2,3,4,5,7,8];
    let sum=0;
    const n=arr1.length;
    for(let i=0;i<n;i++)
       sum+=arr1[i];
    const missingNumber = ((n+1)*(n+2))/2 -sum;
    res.send(missingNumber.toString());
});

router.get("/missingElement2",function(req,res){
  const arr1=[33,34,35,37,38,39];
  let sum=0;
  const n=arr1.length;
  for(let i=0;i<n;i++)
     sum+=arr1[i];
     const len=n+1;
  const missingNumber = len/2*(2*arr1[0]+(len-1)) -sum;
  res.send(missingNumber.toString());
});

router.post("/test-post3",randomController.addToArray);


// 8 APRIL Weekend  ASSIGNMENT

let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]
// METHOD 1 by USING FOR LOOP
router.post("/players",function(req,res){
const newPlayer =req.body;
for(let i=0;i<players.length;i++)
{
    if(players[i].name === newPlayer.name)
       res.send("Player is already exist!")
}
players.push(newPlayer);
console.log(players);
res.send(players);
});

// Method 2 by Using HIGHER OREDR FUNCTION 
 router.post("/players",function(req,res){
     const newPlayer=req.body;
     players.filter((item)=>{
         if(item.name === newPlayer.name)
          return res.send("Player is already exist!")
     })
   players.push(newPlayer);
   console.log(players);
   res.send(players);
 })

   module.exports = router;

