import React from 'react'
import '../styles/Enroll.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const EnrollNow = () => {
  const navigate = useNavigate()
  const [ formerror, setFormError] = useState({})
  const [data, setData] = useState({
    stuname:"",
    department:"",
    technology:"",
      email : "", 
       password :"" })


    const handlechange = (e) =>{
      setData({...data, [e.target.name] :e.target.value});
    }
    const handlesubmit = (e) =>{
      e.preventDefault();
      setFormError(validate(data))
      axios.post('http://localhost:9000/signup', data)
        .then((res)=>{console.log("User Registered") ;
         alert(res.data.msg)})
        .catch((err)=>console.log(err));
        
        navigate('/login')

    }
    const validate = (values) =>{
      const errors = {}
     const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     
     if(!values.stuname){
      errors.stuname = "Name is Required"
}
if(!values.department){
  errors.department = "Department is Required"
}
if(!values.technology){
  errors.technology = "Technology is Required"
}

     if(!values.email){
             errors.email = "Email Required"
     }
     else if(!regex.test(values.email)){
         errors.email = "Email is Not Valid"
     }
     if(!values.password){
      errors.password = "Password is Required"
    }


     return errors;}

  return (
   
    <div className='loginbody'>
    <form className='form_container'>
    <label htmlFor="stuname">Name : </label>
    <input
      type="text"
      name='stuname'
      placeholder="Enter Name.."
      className="input-field"
      onChange={handlechange}

    />
    <p className='errormessage'>{formerror.stuname}</p>
    <label htmlFor="department">Department : </label>
    <input
      type="text"
      name='department'
      placeholder="Enter Department"
      className="input-field"
      onChange={handlechange}

    />
    <p className='errormessage'>{formerror.department}</p>

    <label htmlFor="technology">Technology : </label>
    <input
    type="text"
    name='technology'
    placeholder="Enter Technology"
    className="input-field"
    onChange={handlechange}

  />
  <p className='errormessage'>{formerror.technology}</p>

  <label htmlFor="email">Email : </label>
    <input
    type="email"
    name='email'
    placeholder="Email"
    className="input-field"
    onChange={handlechange}

  />
  <p className='errormessage'>{formerror.email}</p>

  <label htmlFor="password">Password : </label>
    <input
    type="text"
    name='password'
    placeholder="Password"
    className="input-field"
    onChange={handlechange}

  />
  <p className='errormessage'>{formerror.password}</p>

    <button type="submit" className="submit-button" onClick={handlesubmit}>Submit</button>
  </form>
    </div>
  )
}

export default EnrollNow