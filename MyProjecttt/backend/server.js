const express=require('express')
const app=express()
const mongoClient=require('mongodb').MongoClient;
const password = encodeURIComponent("Blohith@123");
const studnet_api=require('./API/student-api')
const faculty_api=require('./API/faculty-api')
const path=require('path')

//connecting front and backend
app.use(express.static(path.join(__dirname,'../client/build')))

// handling refresh pages

app.use(express.json())
app.use('/faculty_api',faculty_api)
app.use('/student_api',studnet_api)



    mongoClient.connect(`mongodb+srv://lohithsatyavenkat:${password}@cluster1.x9t3f7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`)
    // mongodb+srv://lohithsatyavenkat:Blohith@123@cluster1.x9t3f7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1   
    .then(Client=>{
    
    
        //connecting to the database
        //get database object
        // const blogdb=Client.db('blogdb')
        const mydatabase=Client.db('mydatabase')
        // //get collection
        const mycollection=mydatabase.collection('mycollection')
        const studentcollection=mydatabase.collection('studentcollection')
        const facultycollection=mydatabase.collection('facultycollection')
        app.set('mycollection',mycollection)
        app.set('studentcollection',studentcollection)
        app.set('facultycollection',facultycollection)
        // const usercollection=blogdb.collection('usercollection')
        // const articlescollection=blogdb.collection('articlescollection')
        // const authorcollection=blogdb.collection('authorcollection')
        // //share colleciton object with express application 
        // app.set('usercollection',usercollection)
        // app.set('articlescollection',articlescollection)
        // app.set('authorcollection',authorcollection)
        // //confirm db status
        
        console.log("connected")
        // let data=articlescollection.find().toArray()
        // console.log(data);
        
    
    })
    .catch(
        err=>{
            console.log(err);
        }
    )
  
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'))
})  
app.listen(4000,()=>{
    console.log("connected and running")
})