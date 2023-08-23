const {getPokemonsApi} = require("../controllers/PokemonControllers")

const pokemonHandler = async(req,res)=>{
  
  try {
    // const page = parseInt(req.query.page) || 1;
    //     const limit = parseInt(req.query.limit) || 50; 

    //     const offset = (page -1) * limit;
    //     console.log(`Page: ${page}, Limit: ${limit}, Offset: ${offset}`);
    //     const pokemonReady = await getPokemonsApi(offset, limit);
    const pokemonReady= await getPokemonsApi()
   
   
    res.status(200).json(pokemonReady)
  
   
  } catch (error ) {
    res.status(400).json({error:error.message})
  }
}


module.exports = {pokemonHandler}



