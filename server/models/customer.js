const mongoose= require('mongoose');

const customer_schema = new mongoose.Schema({
   Profile: {
       name:{
        type:String,
        required: true,
       },
       address:{
        type:String,
        required: true
       },
       mobile_no:{
        type:Number,
        required: true,
        maxlength: 10
       }
       
       
    },
    Tiffin_provider_code:{
        type:String,
        required: true
    },
    default_week_schedule:[
        {
            lunch:Number,
            dinner:Number
        },
    ],
    Today_orders:{
        date: Date,
        lunch:Number,
        dinner: Number
    },
    Tommorow_orders:{
        date: Date,
        lunch:Number,
        dinner:Number
    }
}) 
module.exports= mongoose.model('CUSTOMER',customer_schema);