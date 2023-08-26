const mongoose= require('mongoose');

const Tiffin_provider_schema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   address:{
    type: String,
    require: true
   },
   Tiffin_provider_code:{
    type:String,
    required:true
   },
   customer_requests:[mongoose.Types.ObjectId],
   accepted_customers:[mongoose.Types.ObjectId]
}) 
module.exports= mongoose.model('TIFFIN',Tiffin_provider_schema);