const axios= require("axios")
const {Type,Pokemon}=require("../db")

const cleanPokemon=(pokemon)=>{
    const { id, name, sprites, stats, height, weight,types } = pokemon;
    
    return{
      id:id.toString(),
      name,
      image:sprites?.other?.['official-artwork']?.front_default,
      life:stats[0].base_stat,
      attack:stats[1].base_stat,
      defense:stats[2].base_stat,
      speed:stats[5].base_stat,
      height,
      weight,
      types:types?.map((t) => t.type.name).join( " & ")
    }
    
  }




const getPokemonsApi = async()=>{
const allPokemon=[];
     
    let url = "https://pokeapi.co/api/v2/pokemon"

    while(allPokemon.length<30){
      const res = await axios.get(url)
      const pokemonData = res.data.results
       url = res.data.next 
       allPokemon.push(...pokemonData)
    } 
    const pokemonReady= await Promise.all(allPokemon.map(async(poke)=> {
      const response = await axios.get(poke.url)
     
      return response.data
      
    })) 
  const batchsize = 10;
  const cleanedPokemon = [];
  for(let i = 0;i<pokemonReady.length;i+=batchsize){
    const batch = pokemonReady.slice(i,i+batchsize)
    const cleanedBatch = batch.map(cleanPokemon)
    cleanedPokemon.push(cleanedBatch)
  }
 return cleanedPokemon.flat()
}  
const getPokemonDb = async()=>{
 const allpokemonDb= await Pokemon.findAll({
  include:{
    model:Type,
    attributes:["name"],
    through:{attributes:[]}
  }
 })
 return allpokemonDb
}

const allPokemon = async()=>{
  const pokemonDb = await getPokemonDb();
  const pokemonApi = await getPokemonsApi();
  return [...pokemonDb,...pokemonApi]
}
const getPokemonByname = async(name)=>{
  
  const pokemonByName = await allPokemon();
  const pokemonFound = pokemonByName.filter((poke)=>poke.name===name.toLowerCase());
  return pokemonFound
}
const getPokemonById = async(id)=>{
  const pokemonById = await allPokemon();
  const pokemonFiltered = pokemonById.filter((poke)=>poke.id===id.toString())
  return pokemonFiltered
}
const createPokemon = async(id,name,image,life,attack,defense,speed,height,weight,types)=>{
  console.log(id,name,image,life,attack,defense,speed,height,weight,types)
  
  const newPokemon =await Pokemon.create({
    id,name,image,life,attack,defense,speed,height,weight
  })

  const getTypesDb = await Type.findAll({
    where:{
      name:types
    }
  })
  await newPokemon.addTypes(getTypesDb)
  return newPokemon
}

module.exports = {allPokemon,createPokemon,getPokemonById,getPokemonByname}