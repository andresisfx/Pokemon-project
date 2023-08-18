const axios= require("axios")

const cleanArr=(arr)=>{
  console.log(arr)
const cleaned = arr.map((el)=>{
  const sprites = el.sprites
  const image = sprites.other.home.front_default!==null?
  sprites.other.home.front_default:sprites.other["official-artwork"].front_default
  const findData =(data)=>{ 
    const valueProp=  el.stats.find((st)=>st.stat.name===data )
    return valueProp?valueProp.base_stat:"not avaliable"
  }
  return{
    id:arr.id,
    name:arr.name,
    height:arr.height,
    image:image,
    weight:arr.weight,
    life:findData("hp"),
    speed:findData("speed"),
    attack:findData("attack"),
    defense:findData("defense")
  }
})
return cleaned  
}


// const pokemonHandler = async(req,res)=>{
//    try {
//     const getPokemonsApi = async (offset,limit)=>{
//       const response=  await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`)
//        const info = response.data.results
       
//        const pokemonDataPromises= info.map(async(ele)=>{
//          const pokemonResponse = await axios.get(ele.url)
//          const pokemonData = pokemonResponse.data
//           return pokemonData
//         })
//       return Promise.all(pokemonDataPromises)
//       }
//       const pokemon =await getPokemonsApi()
        

//         const pokemonReady =  cleanArr(pokemon)
     
//     res.status(200).json(pokemonReady)
//    } catch (error ) {
//     res.status(400).json({error:error.message})
//    }
// }

const pokemonHandler = async(req,res)=>{
   try {

    const batchSize = 10
    const totalPokemon = 1200
    const getPokemonsApi = async (offset,limit)=>{
      const response=  await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`)
       const info = response.data.results
       return info
    }  
    const allPokemon=[];
    
    return Promise.all(pokemonDataPromises)
      
      const pokemon =await getPokemonsApi()
        

        const pokemonReady =  cleanArr(pokemon)
     
    res.status(200).json(pokemonReady)
   } catch (error ) {
    res.status(400).json({error:error.message})
   }
}


module.exports = {pokemonHandler}

