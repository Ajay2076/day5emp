// 1.importing the express 
const express=require("express")
const cors=require('cors')

const employeeModel = require("./model") 
// const { restart } = require("nodemon")

//  2.insitialization
const app= new express()

// middleware || parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
 
// 3.api creation
app.get('/',(req,res)=>{
    res.send("this message is from the server")
})
app.get('/ay',(req,res)=>{
    res.send("this is from ajay")
})
app.get('/aj',(req,res)=>{
    res.send("ERROR Message")
})

app.get('/data',(req,res)=>{
    res.json({"name":"ajay","age":12})
})

// api for adding data
app.post('/create',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send("data added")
})
// api for viewing in data
app.get('/view',async(req,res)=>{
    var data = await employeeModel.find()
    res.json(data)
    console.log(data) 
})
// api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("deleted")
})
// api for updating the data

app.put('/edit/:id',async(req,res)=>{
    let id= req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("data update")
})
//4. port 
app.listen(3005,()=>{
    console.log("port 3005 is up and running")
})