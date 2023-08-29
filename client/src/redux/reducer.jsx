import {GET_ALL_POKEMONS,GET_POKEMON_NAME,CLEAN_FILTER,GET_TYPES,FILTER_TYPES, FILTER_ORIGIN, FILTER_ALPHABETICAL } from "./actions"

let initialState = {
    allPokemons:[],
    allPokemonsCopy:[],
    allTypes:[],
    pokemonFiltered:[],
    filter:false
}


function rootReducer (state= initialState,action){
 switch (action.type) {
    case GET_ALL_POKEMONS :
         
        return{
            ...state,
            allPokemons:action.payload,
            allPokemonsCopy:action.payload,
            filter:false
            
        }
    case GET_POKEMON_NAME:  
      return{
        ...state,
        allPokemons:action.payload,
        filter:false
        
      }
    case CLEAN_FILTER:
      return{
        ...state,
        allPokemons:[...state.allPokemonsCopy],
        filter:false
      }  
    

    case GET_TYPES:
          return{
            ...state,
            allTypes:action.payload
          } 

    case FILTER_TYPES:
      const typename =action.payload;
      let filterOne = [];
      if(action.payload==="none"){
        filterOne= [...state.allPokemonsCopy]
      }else{
       filterOne = [...state.allPokemonsCopy].filter((poke)=> poke.types.includes(typename))
        
       return{
        ...state,
        pokemonFiltered:filterOne,
        filter:true
       }
      }
    case FILTER_ORIGIN:
      
      let filterOrigin=[]
      action.payload==="created"?
        filterOrigin= state.allPokemonsCopy.filter((poke)=>poke.hasOwnProperty("cretedAtDb")):
        filterOrigin= state.allPokemonsCopy.filter((poke)=>!poke.hasOwnProperty("cretedAtDb"))
        return{
          ...state,
          pokemonFiltered:filterOrigin,
          filter:true
        }

    case FILTER_ALPHABETICAL:
      let filterAlpha=[]
          
      
    default:
     return {...state};    
 }
}

export default rootReducer;
