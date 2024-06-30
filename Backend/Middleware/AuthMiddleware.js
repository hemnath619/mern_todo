
const jwt  = require("jsonwebtoken");
const usercollection = require("../model/DataSchema");

const authenticateJWT = async(req, res, next) => {

  const authHeader = req.headers.authorization;
    if (authHeader) 
      {
        const token = authHeader.split(' ')[1];
        console.log(token);
        const decode = jwt.verify(token,process.env.TOKEN_KEY)
        req.user = await usercollection.findById(decode.id).select("-password")
        next();
    }
    else
      { return res.status(401).json(
        {
          message: 'Unauthorized'
        }
        );
      }
    };


module.exports = authenticateJWT;