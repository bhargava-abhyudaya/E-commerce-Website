import User from '../../models/User';
import connectDB from '../../middleware/mongoose';

const handler = async (req,res) =>{
    if (req.method == 'POST'){
        let user = await User.findOne({"email":req.body.email})
        if(user){
            if (user.password === req.body.password){
                res.status(200).json({message:"Login successful"})
            }else{
                res.status(301).json({message:"Invalid Credentials"})
            }
        }else{
            res.status(303).json({message:"User not found"})
        }
    }


}

export default connectDB(handler);
