import {GET_ALL_POKEMONS,GET_POKEMON_NAME,CLEAN_FILTER,GET_TYPES,FILTER_TYPES, FILTER_ORIGIN, FILTER_ALPHABETICAL, FILTER_ATTACK } from "./actions"

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
      let filteredAlpha=[]
      action.payload==="AtoZ"?
      filteredAlpha= [...state.allPokemonsCopy].sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())):
      filteredAlpha= [...state.allPokemonsCopy].sort((a,b)=>b.name.toLowerCase().localeCompare(a.name.toLowerCase()))    
      
      return{
        ...state,
        pokemonFiltered:filteredAlpha,
        filter:true
        
      }
    case FILTER_ATTACK:
      let filteredAttack=[]
      action.payload==="1to100"?
      filteredAttack= [...state.allPokemonsCopy].sort((a,b)=>a.attack-b.attack):
      filteredAttack= [...state.allPokemonsCopy].sort((a,b)=>b.attack-a.attack)
      return{
        ...state,
        pokemonFiltered:filteredAttack,
        filter:true
      }

    default:
     return {...state};    
 }
}

export default rootReducer;
