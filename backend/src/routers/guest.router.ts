
import { Router } from "express";
import asynchandller from 'express-async-handler';
import jwt from "jsonwebtoken";
import { HTTP_BAD_REQUEST } from "../constants/http.status";
import { ProfileCardDataGuest } from "../data";
import { Guest, GuestModel } from '../models/guest.model';

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


    router.get("/", asynchandller(
        async(req ,res)=>{
    
            const guests = await GuestModel.find();
           // console.log(students);
    
             res.send(guests);     // to accede to the student's data.
    }))



/**--------------------------GUEST -----------------------------*/


//Registration methode 
router.post("/registerGuest", asynchandller(
    async(req, res)=>{
        const { name,email,company,adresse,password} = req.body;
        console.log(req.body);


        const guest =  await GuestModel.findOne({email});
        if(guest){
            res.status(HTTP_BAD_REQUEST).send("Il existe déjà un compte pour ce numéro d'étudiant!!");
            return;
        }
        //const encryptedPassword = await bcrypt.hash(password,10); //  hache the password 

        const newGuest:Guest={
            id:'',
            name,
            email,
            adresse,
            company,
            password : password,
            typeProfile :'Guest',
        }
        
        const dbGuest = await GuestModel.create(newGuest);
        res.send(generateTokenResponse(dbGuest));


  
     
  
  
  }))


//Login methode 
router.post("/loginGuest", asynchandller(
    async (req, res)=>{
       
       let user =
       {
       email:req.body.email,
       password:req.body.password,
       }

       
       
       

       const guest = await GuestModel.find(user);
       console.log(guest);
       
       if(guest){
           res.send(generateTokenResponse(guest));
       }
       else{
       
           res.status(HTTP_BAD_REQUEST).send("numero etudiant ou mot de password invalide!!")
       }
 
      
 }
 ))
 

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





