const express = require("express")
const { getAllApps } = require("../controllers/appControllers")
const router = express.Router()

router.get("/",getAllApps)


module.exports = router