const {allPokemon,createPokemon,getPokemonById,getPokemonByname} = require("../controllers/PokemonControllers")

const pokemonHandler = async(req,res)=>{
  const {name}=req.query
  try {
    const pokemonReady= name? await getPokemonByname(name):await allPokemon()
   
   
    res.status(200).json(pokemonReady)
  
   
  } catch (error ) {
    res.status(400).json({error:error.message})
  }
}
const pokemonIdHandler =async (req,res)=>{
  const {id}=req.params
  try {
    if(id){
      const idPokemon =  await getPokemonById(id)
      console.log(idPokemon)
      idPokemon? res.status(200).json(idPokemon):res.status(400).send("id doesn't found")

    }
  } catch (error) {
    res.status(400).json({error:error.message})
  }

}
const postPokemonHandler = async(req,res)=>{
  const {id,name,image,life,attack,defense,speed,height,weight,types}= req.body
  try {
    const newPokemon = await createPokemon( id,name,image,life,attack,defense,speed,height,weight,types)

    res.status(200).json(newPokemon)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}
module.exports = {pokemonHandler,pokemonIdHandler,postPokemonHandler}



