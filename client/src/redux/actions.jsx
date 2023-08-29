import axios from "axios"

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"
export const CLEAN_FILTER = "CLEAN_FILTER"
export const GET_TYPES = "GET_TYPES"
export const FILTER_TYPES="FILTER_TYPES"
export const FILTER_ORIGIN="FILTER_ORIGIN"
export const FILTER_ALPHABETICAL="FILTER_ALPHABETICAL"

const normalizedTypes= (pokemons)=>{
    return pokemons.map((poke)=>({
         ...poke,
         types:poke.types||poke.Types.map((item)=>item.name).join(",").replace(/([^,]+)/g, '"$1"')
    }))
}
export function getPokemons(){
   return async function (dispatch){
    try {
        
        const response = await axios.get("http://localhost:3001/pokemon")
        const allPokemons = response.data
        const pokemonsNormalized = normalizedTypes(allPokemons)
        dispatch({type:GET_ALL_POKEMONS,payload:pokemonsNormalized})
    } catch (error) {
        alert({error:error.message})
    }
    }
}

export function getPokemonByName (name){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
            const pokemonName = response.data
            console.log(pokemonName)
            dispatch({
                type:GET_POKEMON_NAME,
                payload:pokemonName
            })
        } catch (error) {
           alert({error:error.message}) 
        }
    }
}

export function cleanFilters (){
   return {
        type:CLEAN_FILTER
     }
    
}

export function getTypes (){
    return async function(dispatch){
        try {
            
            const response = await axios.get(`http://localhost:3001/type`)
            const types= response.data
            
            dispatch({
                type:GET_TYPES,
                payload:types
            })
        } catch (error) {
            alert({error:error.message})
        }
    }
}

export function filterTypes(type){
    return{
        type:FILTER_TYPES,
        payload:type
    }
} 
export function filterOrigin(orientation){
    return{
        type:FILTER_ORIGIN,
        payload:orientation
    }
} 

export function filterAlphabetical (direction){
   return{
    type:FILTER_ALPHABETICAL,
    payload:direction
   }
}