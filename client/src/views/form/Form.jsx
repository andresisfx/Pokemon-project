import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getTypes } from '../../redux/actions'

const Form = () => {
  const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(getTypes())
 },[dispatch]);
 const types = useSelector((state)=>state.allTypes)
 console.log(types)
  return (
    <div>
   <form >
      <div>
       <input type="text" placeholder="Name: (max: 100 letters)" name="name" value="" />
       <input type="text" placeholder="image url" name="image" value=""onChange="" />
       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="healthScore" value="" />
       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="healthScore" value="" />
       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="healthScore" value="" />
       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="healthScore" value="" />
       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="healthScore" value="" />
       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="healthScore" value="" />
      </div>
      <div>
        <h3>Choose your pokemontype</h3>
      {Array.isArray(types)&&types.map((type)=>(
        <div key={type.name}>
          <input 
          type="checkbox" 
          id={`check-${type.name}`} 
          name="types"
          
          />
         <label htmlFor={`check-${type.name}`}>{type.name}</label>
        </div>
      ))}
       
      </div>
      <div>
        <h3>Add stepByStep: </h3>
        <input type="text" name='instruction' value="" onChange=""/>
        <button >Add</button>
   
      </div>
      <div>
        <Link to="/home">
          <button>Back home</button>
        </Link>
          <button type='submit'>Create recipe</button> 
      </div>
    </form>
    </div>
  )
  
}

export default Form
