const mongoose =require("mongoose")


mongoose.connect("mongodb+srv://ajayparappallil:ajay@cluster0.glke4um.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connect")
})
.catch(err=>console.log(errr))

let mongooschema= mongoose.Schema

const EmployeeSchema = new mongooschema({
    ename:String,
    eage:Number,
    epostion:String,
    esalary:Number
})

var EmployeeModel = mongoose.model("employee",EmployeeSchema)
 module.exports = EmployeeModel
 
