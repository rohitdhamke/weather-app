const express = require("express");
const cors = require("cors")
const fs = require("fs");


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static("."))

app.get("/:city",(req,res)=>{
    const city = req.params.city
    city.toLowerCase()

    try{
        const response = JSON.parse(fs.readFileSync("database.json"))
        if(response.cities[city]){
            res.json(response.cities[city]);
        }
        else{
            res.json({error:"city not found"})
        }
    }
    catch(err){
        res.json({error:"fail to fetch database"})
    }
})


app.listen(3000,()=>{
    console.log("server running on port 3000")
})