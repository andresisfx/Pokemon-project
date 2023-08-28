import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getPokemons } from '../../redux/actions'
import Container from '../../components/container/Container'
import style from "./Home.module.css"
import SearchBar from '../../components/searchBar/SearchBar'
import { cleanFilters } from '../../redux/actions'
const Home = () => {
 const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getPokemons())
    },[])
   const allPokemons = useSelector((state)=>state.allPokemons)
   const cleanAllfilters = ()=>{
    dispatch(cleanFilters())
   }
   return (
    <div className={style.main}>
       <div className={`${style.itemHome} ${style.searchBar}`}>
        <button onClick={cleanAllfilters} > All pokemos</button>
      </div>
      <div className={`${style.itemHome} ${style.searchBar}`}>
        <SearchBar/>
      </div>
      <div className={style.container}>
        <Container pokemons={allPokemons}/>
      </div>
    </div>
   );  
}

export default Home