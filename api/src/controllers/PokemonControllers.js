const axios= require("axios")


const cleanPokemon=(pokemon)=>{
    const { id, name, sprites, stats, height, weight,types } = pokemon;
    
    return{
      id,
      name,
      image:sprites?.other?.["'official-artwork'"]?.front_default,
      hp:stats[0].base_stat,
      attack:stats[1].base_stat,
      defense:stats[2].base_stat,
      speed:stats[5].base_stat,
      height,
      weight,
      types:types?.map((t) => t.type.name).join( " & ")
    }
    
  }

//   const getPokemonsApi = async (offset, limit) => {
//     const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
//     const response = await axios.get(url);
//     const pokemonData = response.data.results;

//     const pokemonReady = await Promise.all(
//         pokemonData.map(async (poke) => {
//             const response = await axios.get(poke.url);
//             return cleanPokemon(response.data);
//         })
//     );

//     return pokemonReady;
// };


const getPokemonsApi = async()=>{
const allPokemon=[];
     
    let url = "https://pokeapi.co/api/v2/pokemon"

    while(allPokemon.length<100){
      const res = await axios.get(url)
      const pokemonData = res.data.results
       url = res.data.next 
       allPokemon.push(...pokemonData)
    } 
    const pokemonReady= await Promise.all(allPokemon.map(async(poke)=> {
      const response = await axios.get(poke.url)
      // console.log(response.data)
      // return cleanPokemon(response.data) 
      return response.data
      
    })) 
  const batchsize = 20;
  const cleanedPokemon = [];
  for(let i = 0;i<pokemonReady.length;i+=batchsize){
    const batch = pokemonReady.slice(i,i+batchsize)
    const cleanedBatch = batch.map(cleanPokemon)
    cleanedPokemon.push(cleanedBatch)
  }
 return cleanedPokemon.flat()
}    

module.exports = {getPokemonsApi}