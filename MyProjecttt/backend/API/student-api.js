const express=require('express')
const studentApp=express.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const expressAsyncHandler=require('express-async-handler')
studentApp.use((req,res,next)=>{
    // authorcollection=req.app.get('authorcollection')
    // articlescollection=req.app.get('articlescollection')
    mycollection=req.app.get('mycollection')
    studentcollection=req.app.get('studentcollection')    
    
    next()  
})
//student registration 
studentApp.post('/register',async(req,res)=>{
    let std=req.body
    // now to send it into database
    // check for exsisting usename
    const newstudent= await studentcollection.findOne({username:std.username})
    console.log(std)
    if(newstudent!=null)
    {
        res.send({message:"User Exist"})
    }
    else{
        // hash password 
        const hashspass=await bcryptjs.hash(std.password,10)
        std.password=hashspass
        await studentcollection.insertOne(std)
        res.send({message:"Student created"})
    }
    
})


studentApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const studCred=req.body
    console.log(studCred)
    //check for username
    const std=await studentcollection.findOne({username:studCred.username})
    console.log(std)
    if(std==null)
    {
        console.log("studCred")
        res.send({message:"not a valid username"})
    }    
    else
    {
        console.log("studCred")
        // check for password
        const status=await bcryptjs.compare(studCred.password,std.password)

        if(status==false)
        {
            res.send({message:"Invalid password"})
        }
        else
        {
            //create jwt Token and send
            const signedToken=jwt.sign({username:std.username},"secretkey",{expiresIn:'1h'})
            res.send({message:"ln successful",token:signedToken,user:std})
            
        }
    }
}))

module.exports=studentApp