import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import Logo from "./Logo";
import CareerCamp from "./CareerCamp";

const Navbar = () => {


  return (
    <div id="navbar">
   
      <Link to='/'  className="text-decoration flex-box"><Logo/></Link>
      <Link to='/courses' className="text-decoration flex-box">Courses</Link>
      <Link to='/scholarship' className="text-decoration flex-box">Scholarship</Link>
      <Link to='/community' className="text-decoration flex-box" >Community</Link>
      <Link to='/practise' className="text-decoration flex-box">Practise</Link>
      <Link to='/carrercamp' className="text-decoration flex-box"> <CareerCamp/></Link>
      <Link to='/login' className="text-decoration flex-box"><button className="loginButton">Login</button></Link>
      <Link to='/enrollNow' className="text-decoration flex-box"><button className="enrollButton">Enroll Now</button></Link>
       
     
    </div>
  );
};

export default Navbar;