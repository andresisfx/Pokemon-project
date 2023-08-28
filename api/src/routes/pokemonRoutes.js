const {Router}= require("express");
const {pokemonHandler,pokemonIdHandler,postPokemonHandler}= require("../handlers/PokemonHandler")
const pokemonRouter = Router();

pokemonRouter.get("/",pokemonHandler)
pokemonRouter.get("/:id",pokemonIdHandler)
pokemonRouter.post("/",postPokemonHandler)

module.exports= pokemonRouter