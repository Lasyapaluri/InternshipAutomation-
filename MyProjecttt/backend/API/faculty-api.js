const express=require('express')
const facultyApp=express.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const expressAsyncHandler=require('express-async-handler')
facultyApp.use((req,res,next)=>{
    // authorcollection=req.app.get('authorcollection')
    // articlescollection=req.app.get('articlescollection')
    mycollection=req.app.get('mycollection')
    facultycollection=req.app.get('facultycollection')    
    
    next()  
})
//test one
facultyApp.get('/testit',expressAsyncHandler(async(req,res)=>{
    res.send({message:"successfully requested"})
}))

facultyApp.post('/register',expressAsyncHandler(async(req,res)=>{
    let faculty=req.body
    // now to send it into database
    // check for exsisting usename
    const newfaculty= await facultycollection.findOne({username:faculty.username})
    console.log(faculty)
    if(newfaculty!=null)
    {
        res.send({message:"User Exsist"})
    }
    else{
        // hash password 
        const hashspass=await bcryptjs.hash(faculty.password,10)
        faculty.password=hashspass
        await facultycollection.insertOne(faculty)
        res.send({message:"created"})
    }
}))


module.exports=facultyApp