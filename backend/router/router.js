const express=require("express")
const router=express.Router()
const {questionapi,questionpostapi,dropquestionapi}=require("../controllers/controller")

// router.get("/questionapi",questionapi)
// router.post("/questionapi",questionpostapi)

router.route("/questionapi").get(questionapi).post(questionpostapi).delete(dropquestionapi)

module.exports=router
