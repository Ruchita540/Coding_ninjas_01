import React from 'react'
import "../styles/InternalHomeRoutes.css";
const DoubtResolution = () => {
  return (
    <div className="Maincotinaer">
      <div>
        <h1>Doubt Resolution</h1>
        <h2>Get your doubts resolved instantly with live 1:1 mentor support.</h2>

        <p>
        In case you have any doubt at any time while you are watching a video, with an MCQ, a coding assignment or a test - We have you covered!
        </p>

        <p>We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines.</p>

        
        <br />

        <div className="inetrnalCards">
          <div className="INternalCardsWidth">
            <h2>20 min </h2>
            <p>avg. doubt resolution time</p>
          </div>
          
          <div className="INternalCardsWidth">
            <h2>100 +</h2>
            <p>doubts resolved per hour</p>
          </div>
        </div>

       
      </div>

      <div>
        <img src="https://files.codingninjas.in/group-4774-9668.png" alt="" />
      </div>
    </div>
  )
}

export default DoubtResolution