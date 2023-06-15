import React from 'react'
import "../styles/InternalHomeRoutes.css";

const MockInterview = () => {
  return (
    <div className="Maincotinaer">
    <div>
      <h1>Mock Interviews </h1>
      <h2>Mock Interviews to help you get prepared for your real interview</h2>

      <p>
      Industry experts from top product companies like Amazon, Facebook, Google and working in the US will take your mock interviews.      </p>

      <p>We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines.</p>

      
      <br />

      <div className="inetrnalCards">
        <div className="INternalCardsWidth">
          <h2>10+ </h2>
          <p>Mock Interviews (with selected course plans)</p>
        </div>
        
        <div className="INternalCardsWidth">
          <h2>500 +</h2>
          <p>Industry mentors</p>
        </div>
      </div>

     
    </div>

    <div>
      <img src="https://files.codingninjas.in/mock-interview-9666.png" alt="" />
    </div>
  </div>
  )
}

export default MockInterview