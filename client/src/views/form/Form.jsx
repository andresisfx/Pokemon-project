import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getTypes } from '../../redux/actions'
import style from "./Form.module.css"

const Form = () => {
  const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(getTypes())
 },[dispatch]);
 const types = useSelector((state)=>state.allTypes)
 console.log(types)

 const [input,setInput]= useState({
  name:"",
  image:"",
  life:"",
  attack:"",
  defense:"",
  speed:"",
  height:"",
  weight:"",
  types:[]
 })
 const [errors,setErrors]= useState({
  name:"",
  image:"",
  life:"",
  attack:"",
  defense:"",
  speed:"",
  height:"",
  weight:"",
  types:""
 })

 const  handleInputChange = (event)=>{
   setInput({
    ...input,
    [event.target.name]:event.target.value
   })
   validate(event)
 }
 const validate = (event)=>{
   const value = event.target.value;
   const property = event.target.name;

   if(property ==="name"){
    const regex  = /^[A-Za-zñÑ\s]*$/;
    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Please fill in the field" }));
    } else if (!regex.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Only letters are allowed" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }    
   }
   if(property==="image"){
    const regex = /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/;
    if(!value){
      setErrors((prevErrors) => ({ ...prevErrors, image: "Please fill this field" }));
    }
    else if(!regex.test(value)){
      setErrors((prevErrors) => ({ ...prevErrors, image: "Invalid URL" }));
    }
    else {
        setErrors((prevErrors) => ({ ...prevErrors, image: "" }));
    }
   }
   if(property==="life"){
    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, life: "Please fill this field" }));
    } else if (value < 0 || value > 100) {
      setErrors((prevErrors) => ({ ...prevErrors, life: "Only numbers from 1 to 100" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, life: "" }));
    }
   }
   if(property==="attack"){
    if(!value){
      setErrors((prevErrors) => ({ ...prevErrors, attack: "Please fill this field" }));
    }
    else if(value <0||value>100){
      setErrors((prevErrors)=>({...prevErrors,attack:"only numbers from 1 to 100"}))
    }
    else {
      setErrors((prevErrors) => ({ ...prevErrors, attack: "" }));
  }
   }
   if(property==="defense"){
    if(!value){
      setErrors((prevErrors) => ({ ...prevErrors, defense: "Please fill this field" }));
    }
    else if(value <0||value>100){
      setErrors((prevErrors)=>({...prevErrors,defense:"only numbers from 1 to 100"}))
    }
    else {
      setErrors((prevErrors) => ({ ...prevErrors, defense: "" }));
  }
   }
   if(property==="speed"){
    if(!value){
      setErrors((prevErrors) => ({ ...prevErrors, speed: "Please fill this field" }));
    }
    else if(value <0||value>100){
      setErrors((prevErrors)=>({...prevErrors,speed:"only numbers from 1 to 100"}))
    }
    else {
      setErrors((prevErrors) => ({ ...prevErrors, speed: "" }));
  }
   } 
   if(property==="height"){
    if(!value){
      setErrors((prevErrors) => ({ ...prevErrors, height: "Please fill this field" }));
    }
    else if(value <0||value>100){
      setErrors((prevErrors)=>({...prevErrors,height:"only numbers from 1 to 100"}))
    }
    else {
      setErrors((prevErrors) => ({ ...prevErrors, height: "" }));
  }
   } 
   if(property==="height"){
    if(!value){
      setErrors((prevErrors) => ({ ...prevErrors, height: "Please fill this field" }));
    }
    else if(value <0||value>100){
      setErrors((prevErrors)=>({...prevErrors,height:"only numbers from 1 to 100"}))
    }
    else {
      setErrors((prevErrors) => ({ ...prevErrors, height: "" }));
  }
   } 
   if(property==="weight"){
    if(!value){
      setErrors((prevErrors) => ({ ...prevErrors, weight: "Please fill this field" }));
    }
    else if(value <0||value>100){
      setErrors((prevErrors)=>({...prevErrors,weight:"only numbers from 1 to 100"}))
    }
    else {
      setErrors((prevErrors) => ({ ...prevErrors, weight: "" }));
  }
   } 
 
 }
 

 const handlerCheckBox = (name,checked)=>{
    const findedIndex = checked.indexOf(name);

    if(findedIndex>-1){
      checked.splice(findedIndex,1)
    }
    else{
      checked.push(name)
    }
    return checked.filter((type,index)=>checked.indexOf(type)===index)
 }
 const handleChangetypes =(name)=>{
   const upDatedTypes = handlerCheckBox(name,[...input.types])
   const hasSelectedTypes = upDatedTypes.length>0
   
   setErrors((prevErrors)=>({
    ...prevErrors,
    types:hasSelectedTypes?"":"Select at least a type"
   }))
   setInput((prevInput)=>({
    ...prevInput,
    types:upDatedTypes
   }))
 }
 const isChecked =(name)=>{
  return input.types.includes(name)
 }


 const handleSubmit=(event)=>{
  event.preventDefault();

  if(errors.name||
     errors.image||
     errors.life||
     errors.attack||
     errors.defense||
     errors.speed||
     errors.height||
     errors.weight||
     errors.types){
   alert("please verify your information")
   return;
  }else if(
  input.name===""||
  input.image===""||
  input.life===""||
  input.attack===""||
  input.defense===""||
  input.speed===""||
  input.height===""||
  input.weight===""||
  input.types===[]){
    alert("please fiil all required fields")
  }
  console.log(input)
  axios.post("http://localhost:3001/pokemon",input) 
  .then((res)=>{
   alert("pokemon registered succesfully")
 
  })
  .catch((error)=>{
   if(error.response){
     console.error("Error processing the request:",error.response.data)
   }
   else{
     console.error("Error processing the request: ",error.message)
   }
  })
  .finally(() => {
   setInput({
     name:"",
     image:"",
     life:"",
     attack:"",
     defense:"",
     speed:"",
     height:"",
     weight:"",
     types:[]
   });
   setErrors({
    name:"",
    image:"",
    life:"",
    attack:"",
    defense:"",
    speed:"",
    height:"",
    weight:"",
    types:""
   })
 });
  

 }
  return (
    <div>
   <form onSubmit={handleSubmit}>
      <div>
       <input type="text" placeholder="Name: (max: 100 letters)" name="name" value={input.name} onChange={handleInputChange}/>
       {errors.name&&<p className={style.errors}>{errors.name}</p>}

       <input type="text" placeholder="image url" name="image" value={input.image}  onChange={handleInputChange}/>
       {errors.image&&<p className={style.errors}>{errors.image}</p>}

       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="life" value={input.life} onChange={handleInputChange}/>
       {errors.life&&<p className={style.errors}>{errors.life}</p>}

       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="attack" value={input.attack} onChange={handleInputChange}/>
       {errors.attack&&<p className={style.errors}>{errors.attack}</p>}

       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="defense" value={input.defense} onChange={handleInputChange}/>
       {errors.defense&&<p className={style.errors}>{errors.defense}</p>}

       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="speed" value={input.speed} onChange={handleInputChange}/>
       {errors.speed&&<p className={style.errors}>{errors.speed}</p>}

       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="height" value={input.height} onChange={handleInputChange} />
       {errors.height&&<p className={style.errors}>{errors.height}</p>}

       <input type="number" placeholder="HealthScore: (min:1 max:100 points )" name="weight" value={input.weight} onChange={handleInputChange} />
       {errors.weight&&<p className={style.errors}>{errors.weight}</p>}

      </div>
      <div>
        <h3>Choose your pokemontype</h3>
      {Array.isArray(types)&&types.map((type)=>(
        <div key={type.name}>
          <input 
          type="checkbox" 
          id={`check-${type.name}`} 
          name="types"
          onChange={()=>handleChangetypes(type.name)}
          checked={isChecked(type.name)}
          
          />
         <label htmlFor={`check-${type.name}`}>{type.name}</label>

        </div>
      ))}
      {errors.types&&<p className={style.errors}>{errors.types}</p>}
       
      </div>
     
      <div>
        <Link to="/home">
          <button>Back home</button>
        </Link>
          <button type='submit'>Create pokemon</button> 
      </div>
    </form>
    </div>
  )
  
}

export default Form
