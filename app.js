const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require("fs")
const cors = require('cors')

const port = 5000

app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.status(200).send({
        message:"ok"
    })
})

app.post("/form",async(req,res)=>{
    console.log(req.body)
    await fs.writeFile("temp/test.txt",JSON.stringify(req.body),(err)=>{
        if(err){
            return res.status(500).send({
                message:err
            })
        }
    })
    await res.status(200).send({
        message:"ok",
        // data:req
    })
})

app.listen(port, () => console.log(`server is running on port: ${port}`))
