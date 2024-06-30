const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
  name: {type: String,required:true},
  email: {type: String,required:true},
  password: {type: String,required:true}
 },{timestamps:true})

const usercollection =  mongoose.model('Usersdetail', dataSchema);

module.exports = usercollection;  