import {GET_ALL_POKEMONS,GET_POKEMON_NAME,CLEAN_FILTER,GET_TYPES } from "./actions"

let initialState = {
    allPokemons:[],
    allPokemonsCopy:[],
    allTypes:[]
}


function rootReducer (state= initialState,action){
 switch (action.type) {
    case GET_ALL_POKEMONS :
         
        return{
            ...state,
            allPokemons:action.payload,
            allPokemonsCopy:action.payload
            
        }
    case GET_POKEMON_NAME:  
      return{
        ...state,
        allPokemons:action.payload
      }
    case CLEAN_FILTER:
      return{
        ...state,
        allPokemons:[...state.allPokemonsCopy]
      }  
    

    case GET_TYPES:
          return{
            ...state,
            allTypes:action.payload
          } 

    default:
     return {...state};    
 }
}

export default rootReducer;
