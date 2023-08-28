const async_wrapper = require('../middleware/async_wrapper'); 
const Tiffin_provider = require('../models/Tiffin_provider');
const CUSTOMER = require('../models/customer');

const signup_tiffin_provider = async_wrapper(async(req,res)=>{
    console.log(req.body)
    const {name,address,mobile_no} = req.body;
    const tiffin = await Tiffin_provider.create({_id:mobile_no, name:name,address:address,mobile_no:mobile_no});
    console.log("tiffin provider successfully signup!")
    res.json(tiffin);
});


const signup_customer = async_wrapper(async(req,res)=>{
    console.log(req.body)
    const {name,address,mobile_no} = req.body;
    const customer = await CUSTOMER.create({Profile:{name:name,address:address,mobile_no:mobile_no},Tiffin_provider_code:"aklsdfkj;adff"});
    console.log("customer successfully signup!")
    res.json(customer);
});



module.exports={signup_customer,signup_tiffin_provider} 