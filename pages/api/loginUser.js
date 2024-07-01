import User from '../../models/User';
import connectDB from '../../middleware/mongoose';
import exp from 'constants';
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var jwt = require('jsonwebtoken');


const handler = async (req,res) =>{
    if (req.method == 'POST'){
        let user = await User.findOne({"email":req.body.email})
        if(user){
            var bytes  = CryptoJS.AES.decrypt(user.password, '123456');
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            if (originalText === req.body.password){
                var token = jwt.sign({ "name":user.name,"email":user.email }, 'jwtKey' );
                res.status(200).json({check:true,token, message:"Login successful"})

            }else{
                res.status(200).json({check:false, message:"Invalid Credentials"})
            }
        }else{
            res.status(200).json({check:false,message:"User not found"})
        }
    }


}

export default connectDB(handler);
