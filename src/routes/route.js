const express = require("express")
const app = express();
const router=express.Router()
const authorController=require("../controllers/authorController")
const bookController = require("../controllers/bookControllers")
const magazineController=require("../controllers/magazineControllers")

router.get("/getBooks", bookController.getBooks)
router.get("/getMagazines",magazineController.getMagazines)

module.exports=router