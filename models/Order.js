const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userID:{type:String,required:true},
    products:[{
        productID:{type:String,required:true},
        quantity:{type:Number,required:true},
    }],
    address:{type:String,required:true},
    status:{type:String,default:"pending",required:true},
},{timestamps:true});
OrderSchema = {};

export default mongoose.model("Order",OrderSchema);