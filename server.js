const express = require ("express")
const mongoose = require ("mongoose")
const dotenv = require ("dotenv")
const router = require("./routes/appRoutes")
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_URL). then(()=>{
    console.log("data base is connected")
})

const app = express()
app.use(cors())
app.use(express.json())

app.use("/apps",router)
app.listen(5000,()=>{
    console.log("server running successfully");
    
})
