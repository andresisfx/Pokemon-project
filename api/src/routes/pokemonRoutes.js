const {Router}= require("express");
const {pokemonHandler}= require("../handlers/PokemonHandler")
const pokemonRouter = Router();

pokemonRouter.get("/",pokemonHandler)
pokemonRouter.get("/:id",)
pokemonRouter.post("/",)

module.exports= pokemonRouter