const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./db/connect');
const router = require('./routes/routes');
const errorHandler = require('./middleware/errorhandler');
const notFound = require('./middleware/notfound');
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use('/',router);
app.use(errorHandler);
app.use(notFound);


const start_server= async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("connected to the database")
        app.listen(PORT,()=>{
            console.log(`server is listening in on port: ${PORT}...`)
        })
    }catch(err){
        console.log(err);
    }
}

start_server();