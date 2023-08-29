import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { filterOrigin, filterTypes, getPokemons, getTypes } from '../../redux/actions'
import Container from '../../components/container/Container'
import style from "./Home.module.css"
import SearchBar from '../../components/searchBar/SearchBar'
import { cleanFilters } from '../../redux/actions'


const Home = () => {
 const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getPokemons())
      dispatch(getTypes())
    },[])
    const allFiltered = useSelector((state)=>state.pokemonFiltered)
    const filter = useSelector((state)=>state.filter)
    const allTypes = useSelector((state)=>state.allTypes)
   const allPokemons = useSelector((state)=>state.allPokemons)
   const [seletedType,setSelectedType]=useState("none")
   const cleanAllfilters = ()=>{
    dispatch(cleanFilters())
   }
   const handleFilterTypeChange=(event)=>{
    const dietname =event.target.value
     setSelectedType(dietname)
     dispatch(filterTypes(dietname))
   }
   const handleOriginFilter=(origin)=>{
     dispatch(filterOrigin(origin))
   }
   const handleAlphaeticalFilter=()=>{
     dispatch()
   }
   console.log(allPokemons)
   return (
    <div className={style.main}>
       <div className={`${style.itemHome} ${style.searchBar}`}>
        <button onClick={cleanAllfilters} > All pokemos</button>
      </div>
      <div>
        <label htmlFor="">select the pokemon according the pokemon type</label>
        <select  onChange={handleFilterTypeChange} value={seletedType}>
          <option value="none">All types</option>
          {allTypes?allTypes.map((type)=><option key={type.id} value={type.name}>{type.name}</option>):null}
        </select>
      </div>
      <div>
        <label htmlFor="">Pokemon origin</label>
        <select  onChange={(event)=>handleOriginFilter(event.target.value)}>
          <option value="">Select by origin</option>
          <option value="created">Pokemon created by users</option>
          <option value="api">preexistent pokemons</option>
        </select>
      </div>
      <div>
       <select onChange={(event)=>handleAlphaeticalFilter(event.target.value)}>
        <label >Select in alphabetical order</label>
        <option value="">select by alpHabetical order</option>
        <option value="AtoZ">Order from A to Z</option>
        <option value="ZtoA">Order from Z to A</option>
       </select>
      </div>
      <div className={`${style.itemHome} ${style.searchBar}`}>
        <SearchBar/>
      </div>
      <div className={style.container}>
        <Container pokemons={filter?allFiltered: allPokemons}/>
      </div>
    </div>
   );  
}

export default Home