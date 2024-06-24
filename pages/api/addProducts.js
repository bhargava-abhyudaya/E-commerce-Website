import Product from '../../models/Product';
import connectDB from '../../middleware/mongoose';

const handler = async (req,res) =>{
    if (req.method == 'POST'){
        console.log(req.body)
        for (let i=0;i<req.body.length;i++){
        let p = new Product ({
            title:req.body[i].title,
            slug:req.body[i].slug,
            description:req.body[i].description,
            price:req.body[i].price,
            image:req.body[i].image,
            category:req.body[i].category,
            availableQuantity:req.body[i].availableQuantity,
            color:req.body[i].color
        })
        await p.save()
    }
    res.status(200).json({message:"Products added successfully"})
        
    }else{
        res.status(200).json({message:"Invalid request method"})
    }
}

export default connectDB(handler);
