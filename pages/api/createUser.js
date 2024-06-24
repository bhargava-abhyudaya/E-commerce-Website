import User from '../../models/User';
import connectDB from '../../middleware/mongoose';

const handler = async (req,res) =>{
    if (req.method == 'POST'){
        console.log(req.body)
        
        let p = new User ({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        await p.save()
    
    res.status(200).json({message:"User added successfully"})
        
    }else{
        res.status(200).json({message:"Invalid request method"})
    }
}

export default connectDB(handler);
