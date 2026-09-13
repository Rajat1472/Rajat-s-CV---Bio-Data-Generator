const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("CV & Bio data generator is working...")
})
;

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongo DB connected successfully.")
    app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    });
})
    

.catch((error)=>
    console.log(error)
    

)
