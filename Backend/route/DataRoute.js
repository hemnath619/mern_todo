
express = require("express");
const dotenv = require("dotenv");
dotenv.config();
router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

// Models
const usercollection = require("../model/DataSchema");
const taskcollection = require("../model/TaskSchema");

// Middleware
const authenticateJWT = require("../Middleware/AuthMiddleware");

// signup & login api's

// signup data
router.route("/signup-data").post( async (req, res) => {
  try{
       const {email,name,password} = req.body;

       if(!email || !name || !password)
       {return res.json({success:false,message:"All Fields must be filled",status:400})}
        
       const user =  await usercollection.findOne({email:email})
        if (user) 
        { return res.json({
          success:false,
          message:`User with entered Email-ID: ${email} already exists. Please enter with new Email-ID`,
          status:400})
        }
            // Hash the password using bcrypt
            const hashedPassword = await bcrypt.hash(password, 10);
            const userdata = await usercollection.create({
                                                          email:email,
                                                          name:name,
                                                          password:hashedPassword
                                                        });
            console.log(userdata);  
            res.json({
              data: userdata,
              success:true, 
              message: "SignedIn, Account created successfully.", 
              status: 200,})  
  }
  catch(err){console.log(err)} 
});


// login data
router.post("/login-data", async (req, res) => {
  try {

      const {name,password} = req.body;
      if(!name || !password)
      {return res.json({success:false, message:"All Fields are not filled", status:400})}

      const user = await usercollection.findOne({name:name});
      if (!user) 
      {return res.json({success:false, message:"User not found",status:400})}

      const ismatch = await bcrypt.compare(password,user.password);
      if(!ismatch)
      {return res.json({success:false,message:"Password wrong"})}

      const token = jwt.sign({id:user._id},process.env.TOKEN_KEY,{expiresIn:"30d"});

      res.json({token:token, id:user._id, user:user.name, success:true, message:"successfully logged in",status:200})
    }
  catch(e) {console.log(e); res.send("wrong Details");}
}); 



// ************************************************************************************************************************************


// todo page api's
// get task list from db
router.get("/task-get",authenticateJWT,async(req, res) => {
  try{
    await taskcollection.find({user:req.user.id})
    .then((result) => {res.json({
                                  data: result,
                                  message: "All items successfully fetched.",
                                  status:200
                                })})
    .catch((err) => {console.log(err)})
  }
  catch(err){console.log(err)}
  });
 

// create task and post to db
router.post("/task-post",authenticateJWT,async (req, res) => {
  try{     
    await taskcollection.create({
                                  task:req.body.task, 
                                  user: req.user.id, 
                                  name:req.user.name
                                  }) 
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200
      })})
    .catch((err) => {console.log(err)});
  }
  catch(err){console.log(err)}
  });
 

  router.post("/task-update/:id",authenticateJWT,async(req, res) => { 
    try {
      const task_id = req.params.id; 
      const updateData = { task: req.body.task}; 
      const task = await taskcollection.findById(req.params.id)

      const user = await usercollection.findById(req.user.id)      
      if(!user)
      {
        res.status(401).json({message:"user not found"})
      }
  
      if(task.user.toString() !== user.id)
      {
        return res.status(401).json({message:"user not authorised"})
      }
      taskcollection.findByIdAndUpdate(task_id,updateData,{new:true}) 
          .then((todo) => res.json(todo)) 
          .catch((err) => res.json(err));                                                                       
       } 
    catch(err){console.log(err)}
       }); 


// Delete task from the database 
router.delete("/task-delete/:id",authenticateJWT,async(req, res) => { 
  const id = req.params.id; 
  const task = await taskcollection.findById(req.params.id)
  const user = await usercollection.findById(req.user.id)

      if(!user)
      {
        res.status(401).json({message:"user not found"})
      }
      

      if(task.user.toString() !== user.id)
      {
        return res.status(401).json({message:"user not authorised"})
      }

  taskcollection.findByIdAndDelete({ _id: id }) 
      .then((todo) => res.json(todo)) 
      .catch((err) => res.json(err)); 
}); 


module.exports = router;
// *******************************************************************************************************************************



