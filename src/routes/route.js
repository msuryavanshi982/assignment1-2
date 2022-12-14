
const express = require("express")
const app = express();
const router=express.Router()
const authorController=require("../controllers/authorController")

router.post("/Author", authorController.createAuthor)


module.exports=router