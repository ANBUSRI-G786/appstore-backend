const mongoose = require ("mongoose")

const appSchema = new mongoose.Schema({
    name:String,
    url:String,
    Image:String,
    category:String
},{collection:"apps"}
)

const appModel = mongoose.model("",appSchema)

module.exports = appModel