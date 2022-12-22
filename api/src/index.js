const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();
const contactRoutes = require("./routes/contactosPorfolio")

const app = express()
const port = process.env.PORT || 3001;

//middleware
app.use(express.json())
app.use(cors())
app.use("/api", contactRoutes)

//routes
app.get("/", (req, res)=> {
    res.send("welcome to my api")
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("connected to MongoDB atlas"))
.catch((error)=>console.log(error))

app.listen(port, ()=> console.log("server listening  on port", port))