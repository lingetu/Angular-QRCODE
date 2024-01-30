
import { Router } from "express";
import asynchandller from 'express-async-handler';
import jwt from "jsonwebtoken";
import { HTTP_BAD_REQUEST } from "../constants/http.status";
import { ProfileCardDataGuest } from "../data";
import { Guest, GuestModel } from '../models/guest.model';


const router = Router();
var ObjectId = require('mongodb').ObjectId; 



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


        const guest =  await GuestModel.findOne({email});
        if(guest){
            res.status(HTTP_BAD_REQUEST).send("Il existe déjà un compte pour ce numéro d'étudiant!!");
            return;
        }
        //const encryptedPassword = await bcrypt.hash(password,10); //  hache the password 
        let eventExemple = {
            name: "eventExemple",
            date: "2021-05-25",
            time: "12:00",
            hour: "2",
            presentList: [],
        }
        const newGuest:Guest={
            id:'',
            name,
            email,
            adresse,
            company,
            password : password,
            typeProfile :'Guest',
            event : [eventExemple]
        }
        
        const dbGuest = await GuestModel.create(newGuest);
        res.send(generateTokenResponse(dbGuest));


  
     
  
  
  }))


//Login methode 
router.post("/loginGuest", asynchandller(
    async (req, res)=>{

       const {email,password}= req.body;
       /*let user =
        {
        email:req.body.email,
        password:req.body.password,
        }*/
       

       const guest = await GuestModel.findOne({email, password});
       console.log(guest);
       

       if(guest){

        res.send(generateTokenResponse(guest));
    }
     else{
       
           res.status(HTTP_BAD_REQUEST).send("numero etudiant ou mot de password invalide!!")
       }
 
      
 }
 ))

 router.post("/creationEvent", asynchandller(
    async (req, res)=>{


        if(req.body.guestID.guestID == null || req.body.event == null || req.body.guestID.guestID == "" || req.body.event == "" || req.body.guestID.guestID == undefined || req.body.event == undefined || req.body.event.name == null || req.body.event.name == "" || req.body.event.name == undefined || req.body.event.date == null || req.body.event.date == "" || req.body.event.date == undefined || req.body.event.time == null || req.body.event.time == "" || req.body.event.time == undefined || req.body.event.hour == null || req.body.event.hour == "" || req.body.event.hour == undefined)
        {
            res.status(HTTP_BAD_REQUEST).send("Erreur");
        }
        
    
    
        var id = req.body.guestID.guestID;       
        var _id = new ObjectId(id);

       GuestModel.updateOne({"_id" :_id },{$push: {event: req.body.event}}).then((result:any)=>{
        console.log(result);
        res.send(generateTokenResponse(req.body.event));
    }
    ).catch((err:any)=>{
        res.status(HTTP_BAD_REQUEST).send("Erreur");
        console.log(err);
    }
    );

    //    if(!guest){
    //     res.status(HTTP_BAD_REQUEST).send("Erreur")
    // }
    // else{
        
    //     res.send(generateTokenResponse(guest));
    // }

 }
 ))
      
      

       






// Here we define a fonction for the users authentification like  in a real database

const generateTokenResponse = (user :any )=>{

    const token = jwt.sign({
        number:user.number ,
    } ,
    "ThisWouldRepresenteASecretKey",
    {
        expiresIn:"30d"
    });

    user.token = token ;
    return user;

}



export default router;





