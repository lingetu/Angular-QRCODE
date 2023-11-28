import cors from "cors";
import express from "express";
import { ProfileCardData } from "./data";

const app = express();  // an express application where we will define all ours api

app.use(cors({
    credentials:true,
    origin:[ "http://localhost:4200"]    // to connect to the client serve 
}));

app.get("/api/students", (req ,res)=>{

    res.send(ProfileCardData);     // to accede to the students data.
})


app.get("/api/students/search/:searchTerm", (req ,res)=>{

  const searchTerm = req.params.searchTerm;
  const students = ProfileCardData.filter(student => student.name.toLowerCase()
  .includes(searchTerm.toLowerCase()));


   res.send(students); // to accede to the students data.
})


const port = 5000;

app.listen(port ,()=>{
    console.log("Website serve on htpp://localhost:" + port)
})



