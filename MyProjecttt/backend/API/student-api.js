const express=require('express')
const studentApp=express.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const expressAsyncHandler=require('express-async-handler')
studentApp.use((req,res,next)=>{

    mycollection=req.app.get('mycollection')
    studentcollection=req.app.get('studentcollection')    
    interncollection=req.app.get('interncollection')
    next()  
})

// Student registration
studentApp.post('/register', async (req, res) => {
    let std = req.body;
    
    // Check for existing username
    const newstudent = await studentcollection.findOne({ username: std.username });
    console.log(std);
    
    if (newstudent != null) {
      res.send({ message: "User Exist" });
    } else {
      // Hash password
      const hashspass = await bcryptjs.hash(std.password, 10);
      std.password = hashspass;
      await studentcollection.insertOne(std);
      res.send({ message: "Student created" });
    }
  });

//student login
studentApp.post('/login', expressAsyncHandler(async (req, res) => {
    const studCred = req.body;
    console.log(req.body)
    const std = await studentcollection.findOne({ username: studCred.username });
    if (std == null) {
        res.send({ message: "not a valid username" });
    } else {
        const status = await bcryptjs.compare(studCred.password, std.password);
        if (status == false) {
            res.send({ message: "Invalid password" });
        } else {
            const signedToken = jwt.sign({ username: std.username }, "secretkey", { expiresIn: '1h' });
            res.send({ message: "login successful", token: signedToken, user: std });
        }
    }
}));

studentApp.post('/add-internship', expressAsyncHandler(async (req, res) => {
    let internship = req.body;

    // Check for existing internship with the same roll number, company, start date, and end date
    const existingInternship = await interncollection.findOne({
        'Roll Number': internship.RollNumber,
        'Internship Offered Company Name': internship['Internship Offered Company Name'],
        'Starting Date': internship.StartingDate,
        'Ending Date': internship.EndingDate
    });

    if (existingInternship != null) {
        res.send({ message: "Internship already exists for this student in the specified company during the given period" });
    } else {
        await interncollection.insertOne(internship);
        res.send({ message: "Internship added successfully" });
    }
}));

module.exports=studentApp