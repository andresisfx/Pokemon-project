const axios =require("axios")
const {Type} = require("../db.js")


const getTypes = async()=>{ 
    const typesFromDb = await Type.findAll();
    if(typesFromDb.length===0){
     const getTypesApi = await axios.get("https://pokeapi.co/api/v2/type")
     const typesReady = getTypesApi.data.results.map((type,index)=>({id:index+1, name:type.name}))
     const cleanedTypes = await Type.bulkCreate(typesReady)
     return cleanedTypes
    }
   }
   module.exports={getTypes}