const {Router}=require("express");
const {typeHandler}=require("../handlers/TypeHandler")
const typeRouter = Router();

typeRouter.get("/",typeHandler)
module.exports = typeRouter