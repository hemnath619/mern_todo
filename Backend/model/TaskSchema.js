const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
    name:{type:mongoose.Schema.Types.String,required:true,ref:"username"}
},{timestamps:true})

const taskcollection = mongoose.model('Userstask', taskSchema);
module.exports = taskcollection;

