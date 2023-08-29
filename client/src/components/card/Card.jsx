import React from 'react'
import style from "./Card.module.css"
import { Link } from 'react-router-dom'
function Card({id,image,types,name}) {

  return (
    <Link className={style.link} to={`/detail/${id}`}>
    <div className={style.cont}>
      <div className={style.title} >
        <div className={style.letterDiv}>
        <h3 className={style.text}>Name: {name}</h3>
         <h3>Type: {Array.isArray(types)?types.map((item)=>
        
          <li key={item.name}>{item.name}</li>
          
        ):<li key={types}>{types}</li>}
         </h3>
        </div>
        <div className={style.imageDiv}>
        <img src={image} className={style.image} alt={name} />
        </div>
      </div>
      
    </div>
    </Link>
  )
}

export default Card