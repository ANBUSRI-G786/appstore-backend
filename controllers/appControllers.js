const appModel = require("../models/appModels")

exports.getAllApps = async (req,res)=>{
    try{
        if(req.query){
            const queryObj = {...req.query}
            var query = await appModel.find(queryObj)
        }
        else{
            var query = await appModel.find()
        }
        res.status(200).json(query)
    }
    catch(err){
        res.status(500).json({
            message:"Internal error"
        })
    }
}