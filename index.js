const express = require("express")
const cors = require("cors")

const app = express()
const products = require("./products")

app.use(express.json())
app.use(cors())

// single route
app.get("/", (req,res)=> {
    res.send("Welcome to the online shop API")

})
// product route
app.get("/products", (req,res)=> {
    res.send([2,3,4])

})

const port = process.env.PORT || 5005;

app.listen(5005, ()=>{
    console.log(`Server running on port ${port}`)
})