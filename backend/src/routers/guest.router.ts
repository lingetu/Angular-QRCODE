
import { Router } from "express";
import asynchandller from 'express-async-handler';
import jwt from "jsonwebtoken";
import { ProfileCardDataGuest } from "../data";
import { GuestModel } from '../models/guest.model';

const router = Router();



//to connect to the database 


router.get("/seed", asynchandller(
    async (req ,res)=>{
    const guestCount = await  GuestModel.countDocuments();
    if(guestCount > 0){
     res.send("Seed is already done !!");
     return;
    }
 
    await GuestModel.create(ProfileCardDataGuest);
     res.send(" Seed is Done !");     
 }))
 









/**------------------------Test-------------------------------- */
router.get("/", (req ,res)=>{

    res.send(ProfileCardDataGuest);     // to accede to the student's data.


})


/**--------------------------GUEST -----------------------------*/


//Registration methode 
router.post("/registerGuest", (req, res)=>{

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
    ProfileCardDataGuest.push(user);
      return res.send("compte créer avec succés")
  }


})


//Login methode 
router.post("/loginGuest", asynchandller(
    async (req, res)=>{
       console.log(req.body);

       const {email,password}= req.body;
       

       const guest = await GuestModel.findOne({password});
       console.log(guest);
       
       if(guest){
           res.send(generateTokenResponse(guest));
       }
       else{
           const BAD_REQUEST = 400;
           res.status(BAD_REQUEST).send("email ou mot de password invalide!!")
       }
 
      
 }
 ))

 router.post("/creationEvent", (req, res)=>{
    console.log(req.body);
})



 /*
router.post("/loginGuest", (req, res)=>{

    // to test the login methode
  console.log(req.body);

 let user =
 {
  mail: req.body.mail,
  password: req.body.password,
 };   // more simple than the first example  , called Destructuring Assignment 
 const find = ProfileCardDataGuest.find(data => data.mail === user.mail &&
  data.password === user.password);

  if (find){
    console.log("connexté")
      return res.send(generateTokenResponse(user));
  }else{
      console.log("Identifiant ou mot de passe pas valid!")
      return res.status(300).send("Identifiant ou mot de passe pas valid!")
  }


})*/


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



export default router;





