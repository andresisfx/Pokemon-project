import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonByName } from '../../redux/actions'
import style from "./SearchBar.module.css"
const SearchBar = () => {
  const dispatch = useDispatch()
   const [input,setInput]=useState("")
   const[errors,setErrors]=useState("")

 
   const handleChange =(event)=>{
    setInput(event.target.value)
    validate(event.target.value)
    !event.target.value&&setErrors("")
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(getPokemonByName(input))
    setInput("")

  }
  const validate =(value)=>{
    const regex = new RegExp(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/)
    if(value){
    !regex.test(value)?setErrors("only letters are allowed"):setErrors("")
    }
    else {
      setErrors("")
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Search a pokemon</label>
        <input className={style.input}  value={input} type="text" onChange={handleChange} placeholder='Type here'/>
        {errors?<p className={style.errors}>{errors}</p>:null}
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar