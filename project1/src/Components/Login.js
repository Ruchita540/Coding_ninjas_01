import React from 'react'
import '../styles/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Login = () => {
  const navigate = useNavigate()

  const [formerror, setFormError] = useState({})
  const [data, setData] = useState({

    email: "",
    password: ""
  })


  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    setFormError(validate(data))

    axios.post('http://localhost:9000/login', data).then((res)=>{console.log("User Logged In"); alert("welcome "+ res.data.stuname)})
    .catch((err)=>console.log(err));
    //navbar with my class roomoption then navigate to courses and then payment gateway .
    // add  
    navigate('/courses')   
    

  }
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


    if (!values.email) {
      errors.email = "Email Required*"
    }
    else if (!regex.test(values.email)) {
      errors.email = "Email is Not Valid*"
    }
    if (!values.password) {
      errors.password = "Password is Required*"
    }


    return errors;
  }

  return (

    <div className='loginbody'>
      <form className='form_container'>

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

export default Login