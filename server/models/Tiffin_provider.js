const mongoose= require('mongoose');

const Tiffin_provider_schema = new mongoose.Schema({
   _id: {
      type: String,
      required: true
     },
   name: {
      type: String,
      required: true
     },
   address:{
    type: String,
    require: true
   },

   customer_requests:[String],
   accepted_customers:[String]
}) 
module.exports= mongoose.model('TIFFIN',Tiffin_provider_schema);