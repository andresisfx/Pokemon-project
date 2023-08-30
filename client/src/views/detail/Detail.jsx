import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from"./Detail.module.css"

const Detail = () => {
 const {id}=useParams()
 const [pokemon,setPokemon]=useState({})
 const [loading,setLoading]=useState(true)
 const [error,setError]=useState(null)

const normalized=(pokemon)=>{
  return pokemon.map((poke)=>({
    ...poke,
    types:poke.types||poke.Types.map((item)=>item.name).join(",").replace(/([^,]+)/g, '"$1"')
}))
}
 useEffect(()=>{
   const getPokemon=async()=>{
     try {
       if(id){
         const response = await axios.get(`http://localhost:3001/pokemon/${id}`)

         const pokemon = response.data
         console.log(pokemon)
          const normalPokemon =normalized(pokemon)
         
         setPokemon(normalPokemon)
         setLoading(false)
        }
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    getPokemon()
 },[])

 if(Object.keys(pokemon).length===0){
  return <div><h1 >Detail loading</h1 ></div>
 }
 if(loading){
  return<div><h1 >...Loading</h1 ></div>
 }
 if(error){
  return <div><h1 >{error}</h1 ></div>
 }
//  console.log(pokemon)
  return (
    
    <div className={style.content}>
    <div className={style.divData}>
      <div className={style.titleAndText}>
        <h1 className={style.title}>Name:</h1>
        <h2 className={style.text}>{pokemon[0].name}</h2>
      </div>
  
      <div className={style.titleAndText}>
        <h1 className={style.title}>Id:</h1>
        <h2 className={style.text}>{pokemon[0].id}</h2>
      </div>
  
      <div className={style.titleAndText}>
        <h1 className={style.title}>Life:</h1>
        <h2 className={style.text}>{pokemon[0].life}</h2>
      </div>
  
      <div className={style.titleAndText}>
        <h1 className={style.title}>Attack:</h1>
        <h2 className={style.text}>{pokemon[0].attack}</h2>
      </div>
  
      <div className={style.titleAndText}>
        <h1 className={style.title}>Defense:</h1>
        <h2 className={style.text}>{pokemon[0].defense}</h2>
      </div>
  
      <div className={style.titleAndText}>
        <h1 className={style.title}>Speed:</h1>
        <h2 className={style.text}>{pokemon[0].speed}</h2>
      </div>
  
      <div className={style.titleAndText}>
        <h1 className={style.title}>Height:</h1>
        <h2 className={style.text}>{pokemon[0].height}</h2>
      </div>
  
      <div className={style.titleAndText}>
        <h1 className={style.title}>Weight:</h1>
        <h2 className={style.text}>{pokemon[0].weight}</h2>
      </div>
  
      <div className={style.titleAndText}>
        <h1 className={style.title}>Types:</h1>
        <h2 className={style.text}>{pokemon[0].types}</h2>
      </div>
    </div>
    <div className={style.divImage}>
      <img className={style.image} src={pokemon[0].image} alt={pokemon[0].name} />
    </div>
  </div>
  
  )
}

export default Detail
// "name":"jesusleiton",
// "image":"hgbxfgbf.png",
// "life":35,
// "attack":10,
// "defense":6,
// "speed":21,
// "height":24,
// "weight":16,