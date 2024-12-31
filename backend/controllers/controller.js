const questionapi = async (req, res) => {
    res.json("get question api")
}

const questionpostapi = async (req, res) => {
    res.json("get question post api")
}

const dropquestionapi = async (req,res)=>{
    res.json("get question delete api")
}

module.exports={questionapi,questionpostapi,dropquestionapi}