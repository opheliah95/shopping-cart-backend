const express = require("express")
const cors = require("cors")

const app = express()


app.use(express.json())
app.use(cors())

// single route
app.get("/", (req,res)=> {
    res.send("Welcome to the online shop API")

})

app.listen(5005, ()=>{
    console.log("Server running on port 5000")
})