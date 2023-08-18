const { Router } = require('express');
const pokemonRouter = require("./pokemonRoutes")
// const typeRouter= require("./typeRoutes")


const mainRouter = Router();

mainRouter.use("/pokemon",pokemonRouter)
// mainRouter.use("/type",)



module.exports = mainRouter;
