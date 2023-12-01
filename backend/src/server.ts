import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import { ProfileCardDataGuest, ProfileCardDataStudent } from "./data";

// const filenameUser = "./data/users.json";

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

    res.send(ProfileCardDataStudent);     // to accede to the students data.
})
app.get("/api/guests", (req ,res)=>{

    res.send(ProfileCardDataGuest);     // to accede to the students data.
})


app.get("/api/students/search/:searchTerm", (req ,res)=>{  // to accede to the students data by a searchTerm

  const searchTerm = req.params.searchTerm;
  const students = ProfileCardDataStudent.filter(student => student.name.toLowerCase()
  .includes(searchTerm.toLowerCase()));
   res.send(students);       
});


app.get("/api/students/company/:entry", (req,res)=>{         // to accede to the students company by an entry .
 const  entry = req.params.entry;
 const students = ProfileCardDataStudent.filter(student => student.company.toLowerCase()
 .includes(entry.toLowerCase()));
 
 res.send(students);


});

/**--------------------------STUDENT -----------------------------*/
app.post("/api/students/loginStudent", (req, res)=>{

      // to test the login methode
    console.log(req.body);

   let user =
   {
    username: req.body.numberStudent,
    password: req.body.password,
   };   // more simple than the first example  , called Destructuring Assignment 
   const find = ProfileCardDataStudent.find(data => data.username === user.username &&
    data.password === user.password);

    if (find){
        return res.send(generateTokenResponse(user));
    }else{
        console.log("Identifiant ou mot de passe pas valid!")
        return res.status(300).send("Identifiant ou mot de passe pas valid!")
    }


})
app.post("/api/students/registerStudent", (req, res)=>{

    // to test the login methode
    console.log(req.body);
 let user =
 {
  username: req.body.numberStudent,
  password: req.body.password,
 };   // more simple than the first example  , called Destructuring Assignment 
 const find = ProfileCardDataStudent.find(data => data.username === user.username &&
  data.password === user.password);

  if (find){
      return res.status(400).send("Identifiant ou mot de passe pas valid!")
  }else{
    ProfileCardDataStudent.push(user);
      return res.send("compte créer avec succés")
  }


})



/**--------------------------GUEST -----------------------------*/
app.post("/api/guests/registerGuest", (req, res)=>{

    // to test the login methode
    console.log(req.body);
 let user =
 {
  username: req.body.mail,
  password: req.body.password,
 };   // more simple than the first example  , called Destructuring Assignment 
 const find = ProfileCardDataGuest.find(data => data.username === user.username &&
  data.password === user.password);

  if (find){
      return res.status(400).send("Identifiant ou mot de passe pas valid!")
  }else{
    ProfileCardDataStudent.push(user);
      return res.send("compte créer avec succés")
  }


})
app.post("/api/guests/loginGuest", (req, res)=>{

    // to test the login methode
  console.log(req.body);

 let user =
 {
  username: req.body.mail,
  password: req.body.password,
 };   // more simple than the first example  , called Destructuring Assignment 
 const find = ProfileCardDataGuest.find(data => data.username === user.username &&
  data.password === user.password);

  if (find){
      return res.send(generateTokenResponse(user));
  }else{
      console.log("Identifiant ou mot de passe pas valid!")
      return res.status(300).send("Identifiant ou mot de passe pas valid!")
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



