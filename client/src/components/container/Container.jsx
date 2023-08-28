import React from 'react'
import Card from '../card/Card'
import style from "./Container.module.css"
function Container({pokemons}) {
  return (
    <div className={style.container} >
      {pokemons.map((poke)=>{
        return(
        <Card
        id={poke.id}
        image={poke.image}
        types={poke.types}
        name={poke.name}
        />)
      })}
    </div>
  )
}

export default Container

