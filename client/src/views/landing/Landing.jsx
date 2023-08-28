import React from 'react'
import style from "./Landing.module.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className={style.main}>
    <div className={style.landingItems}>
      <h1> Welcome to Pokemon App my name is Andres Rodriguez and i hope you enjoy this travel</h1>
     <Link  to="/home"> <button className={style.button}>Home</button></Link> 
    </div>
    </div>
  )
}

export default Landing