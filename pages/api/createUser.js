import User from '../../models/User';
import connectDB from '../../middleware/mongoose';
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");

const handler = async (req,res) =>{
    if (req.method == 'POST'){
        console.log(req.body)
        var encryptPass = CryptoJS.AES.encrypt(req.body.password, '123456').toString();
        let p = new User ({
            name:req.body.name,
            email:req.body.email,
            password:encryptPass,
        })
        await p.save()
    
    res.status(200).json({message:"User added successfully"})
        
    }else{
        res.status(200).json({message:"Invalid request method"})
    }
}

export default connectDB(handler);
