const express=require("express")
const router=express.Router()
const {questionapi,questionpostapi,dropquestionapi,resultapi,resultpostapi,resultdeleteapi}=require("../controllers/controller")

// router.get("/questionapi",questionapi)
// router.post("/questionapi",questionpostapi)

router.route("/questionapi").get(questionapi).post(questionpostapi).delete(dropquestionapi)

router.route("/resultapi").get(resultapi).post(resultpostapi).delete(resultdeleteapi)

module.exports=router
