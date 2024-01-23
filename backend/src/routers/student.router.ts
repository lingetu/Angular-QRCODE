
import { Router } from "express";
import asynchandller from 'express-async-handler';
import jwt from "jsonwebtoken";
import { ProfileCardDataStudent } from "../data";
import { StudentModel } from '../models/student.model';

const router = Router();


//to connect to the database 


router.get("/seed", asynchandller(
   async (req ,res)=>{
   const studentCount = await  StudentModel.countDocuments();
   if(studentCount > 0){
    res.send("Seed is already done !!");
    return;
   }

   await StudentModel.create(ProfileCardDataStudent);
    res.send(" Seed is Done !");     
}))




/**------------------------Test-------------------------------- */
router.get("/", asynchandller(
    async(req ,res)=>{

        const students = await StudentModel.find();

         res.send(students);     // to accede to the student's data.
}))



router.get("/search/:searchTerm", (req ,res)=>{  // to accede to the students data by a searchTerm

  const searchTerm = req.params.searchTerm;
  const students = ProfileCardDataStudent.filter(student => student.name.toLowerCase()
  .includes(searchTerm.toLowerCase()));
   res.send(students);       
});


router.get("/company/:entry", (req,res)=>{         // to accede to the students company by an entry .
 const  entry = req.params.entry;
 const students = ProfileCardDataStudent.filter(student => student.company.toLowerCase()
 .includes(entry.toLowerCase()));
 
 res.send(students);


});



  
  /**--------------------------STUDENT -----------------------------*/
  router.post("/loginStudent", (req, res)=>{
  
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
  router.post("/registerStudent", (req, res)=>{
  
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