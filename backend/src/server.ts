import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import { ProfileCardData } from "./data";

const app = express();  // an express application where we will define all ours api

app.use(express.json()); // allow us to send a json request 


app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
    
    });


app.use(cors({
    credentials:true,
    origin:[ "http://localhost:4200"]    // to connect to the client serve 
}));

app.get("/api/students", (req ,res)=>{

    res.send(ProfileCardData);     // to accede to the students data.
})


app.get("/api/students/search/:searchTerm", (req ,res)=>{  // to accede to the students data by a searchTerm

  const searchTerm = req.params.searchTerm;
  const students = ProfileCardData.filter(student => student.name.toLowerCase()
  .includes(searchTerm.toLowerCase()));


   res.send(students);       
});


app.get("/api/students/company/:entry", (req,res)=>{         // to accede to the students company by an entry .
 const  entry = req.params.entry;
 const students = ProfileCardData.filter(student => student.company.toLowerCase()
 .includes(entry.toLowerCase()));
 
 res.send(students);


});


app.post("api/students/login", (req, res)=>{

   // const body = req.body;
   const { number , password} = req.body;   // more simple than the first example  , called Destructuring Assignment 


   

   const user = ProfileCardData.find(user => user.number === number &&
    user.password === password);

    if (user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("Identifiant ou mot de passe pas valid!")
    }


})


// Here we define a fonction for the users authentification like  in a real database

const generateTokenResponse = (user :any )=>{

    const token = jwt.sign({
        number:user.number , company :user.company
    } ,
    "ThisWouldRepresenteASecretKey",
    {
        expiresIn:"30d"
    });

    user.token = token ;
    return user;

}








const port = 5000;

app.listen(port ,()=>{
    console.log("Website serve on htpp://localhost:" + port)
})



