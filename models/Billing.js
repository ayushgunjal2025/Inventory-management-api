const mongoose =require('mongoose');

const billingSchema = new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer",
        required:true,
    },

    products:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        }
    }],
    totalamount:{
        type:Number,
        required:true,
    }
});

module.exports=mongoose.model("Billing",billingSchema);