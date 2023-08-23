const axios =require("axios")
const {getTypes}=require("../controllers/TypeController.js")

const typeHandler = async(req,res)=>{
   try { 
      const types = await getTypes()
      console.log(types)
       res.status(200).json(types)
   } catch (error) {
    res.status(400).json({error:error.message})
   }
}
module.exports={typeHandler}