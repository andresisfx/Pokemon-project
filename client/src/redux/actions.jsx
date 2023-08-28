import axios from "axios"

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"
export const CLEAN_FILTER = "CLEAN_FILTER"
export const GET_TYPES = "GET_TYPES"


export function getPokemons(){
   return async function (dispatch){
    try {
        
        const response = await axios.get("http://localhost:3001/pokemon")
        const allPokemons = response.data
        
        dispatch({type:GET_ALL_POKEMONS,payload:allPokemons})
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
            console.log(response)
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