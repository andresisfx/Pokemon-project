import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { filterAlphabetical, filterAttack, filterOrigin, filterTypes, getPokemons, getTypes } from '../../redux/actions'
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
    const items_per_page =10
    const allFiltered = useSelector((state)=>state.pokemonFiltered)
    const filter = useSelector((state)=>state.filter)
    const allTypes = useSelector((state)=>state.allTypes)
   const allPokemons = useSelector((state)=>state.allPokemons)
   const [seletedType,setSelectedType]=useState("none")
   const [items,setItems]=useState([...allPokemons].splice(0,items_per_page))
   const [itemsFiltered,setItemsFiltered]=useState([...allFiltered].splice(0,items_per_page))
   const [currentPage,setCurrentPage]=useState(0)

   useEffect(()=>{
    setItems([...allPokemons].splice(0,items_per_page))
    setItemsFiltered([...allFiltered].splice(0,items_per_page))
    setCurrentPage(0)
   },[allPokemons,allFiltered])

   const handleNextPage=()=>{
    const next_page = currentPage+1
    const firstIndex= next_page*items_per_page
     if(filter){
        if(firstIndex>=allFiltered.length){return}
        else{
          setItemsFiltered([...allFiltered].splice(firstIndex,items_per_page))
          setCurrentPage(next_page)
        }
     }else{
      if(firstIndex>=allPokemons.length){return}
      else{
      setItems([...allPokemons].splice(firstIndex,items_per_page))
      setCurrentPage(next_page)
      }
     }
   }
   const handlePrevPage=()=>{
    const prev_page = currentPage-1;
    const firstIndex= prev_page * items_per_page
    if(prev_page<0)return
    if(filter){
      
      setItemsFiltered([...allFiltered].splice(firstIndex,))
      setCurrentPage(prev_page)

    }else{
      setItems([...allPokemons].splice(firstIndex,items_per_page))
      setCurrentPage(prev_page)
    } 
   }

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
   const handleAlphaeticalFilter=(orientation)=>{
     dispatch(filterAlphabetical(orientation))
   }
   const handleAttackfilter=(orientation)=>{
    dispatch(filterAttack(orientation))
   }
   console.log(allPokemons)
   return (
    <div className={style.main}>
      <div className={style.contItems}>
         <div className={style.searchBar}>
          <SearchBar/>
        </div>
        <div className={style.allButtonDiv}>
           <button className={style.allButton} class onClick={cleanAllfilters} > All pokemos</button>
        </div>
        <div className={style.Items}>
            <label className={style.label}>select by type</label>
            <select className={style.select}  onChange={handleFilterTypeChange} value={seletedType}>
            <option className={style.select}  value="none">Select type</option>
            {allTypes?allTypes.map((type)=><option key={type.id} value={type.name}>{type.name}</option>):null}
          </select>
        </div>
        <div className={style.Items}>
         <label className={style.label}>Pokemon origin</label>
         <select className={style.select}  onChange={(event)=>handleOriginFilter(event.target.value)}>
           <option className={style.select}  value="">Select by origin</option>
           <option className={style.select}  value="created">Pokemon created by users</option>
           <option className={style.select}  value="api">preexistent pokemons</option>
         </select>
        </div>
        <div className={style.Items}>
         <label className={style.label}>Select by alphabetical order</label>
         <select className={style.select} onChange={(event)=>handleAlphaeticalFilter(event.target.value)}>
            <option className={style.select} value="">select by alpHabetical order</option>
            <option className={style.select}  value="AtoZ">Order from A to Z</option>
            <option className={style.select}  value="ZtoA">Order from Z to A</option>
          </select>
        </div>
        <div className={style.Items}>
          <label className={style.label}>Select a pokemon by attack</label>
          <select className={style.select}  onChange={(event)=>handleAttackfilter(event.target.value)}>
            <option className={style.select}  value="">Select by attack</option>
            <option className={style.select}  value="1to100">from 1 to 100</option>
            <option className={style.select}  value="100to1">From 100 to 1</option>
          </select>
         </div>
      </div>
        
      <div className={style.container}>
        <Container pokemons={filter?itemsFiltered: items}/>
      </div>
         <div className={style.paginateDiv}>
           <button className={style.buttonPag} onClick={()=>handlePrevPage()}>Prev page</button><button className={style.buttonPag}  onClick={()=>handleNextPage()}>Next page</button>
          </div>
    </div>
   );  
}

export default Home