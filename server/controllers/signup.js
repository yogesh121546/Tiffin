const async_wrapper = require('../middleware/async_wrapper'); 
const Tiffin_provider = require('../models/Tiffin_provider');

const signup_customer = async_wrapper(async(req,res)=>{
    const {name,address,mobile_no} = req.body;
    await Tiffin_provider.create({name:name,address:address,mobile_no:mobile_no});
    console.log("tiffin provider successfully signup!")
    
});


module.exports={signup_customer}