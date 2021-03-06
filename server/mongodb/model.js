import mongoose from "mongoose";
const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    level:{
     type:Number,
     required:true
    },
    date:{
        type:Date,
        default:new Date()
    }
})

const Taskmodel=mongoose.model("task",taskSchema)

export default Taskmodel;
