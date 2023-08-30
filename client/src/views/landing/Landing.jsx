import React from 'react'
import style from "./Landing.module.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className={style.main}>
    <div className={style.landingItems}>
      <h1> Welcome to Pokemon App my name is Andres Rodriguez and i hope you enjoy this journey, I am a passionate Full Stack JavaScript developer, deeply engrossed in the world of coding and technology. With a blend of creativity and problem-solving skills, I bring projects to life that transcend mere functionality, offering immersive and seamless user experiences.As a Full Stack developer, my expertise spans both front-end and back-end development. I skillfully craft dynamic and intuitive user interfaces that captivate users from the moment they interact with the application</h1>
     <Link  to="/home"> <button className={style.button}>Home</button></Link> 
    </div>
    </div>
  )
}

export default Landing