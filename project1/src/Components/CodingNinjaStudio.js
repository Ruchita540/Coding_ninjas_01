import React from 'react'
import "../styles/InternalHomeRoutes.css";

const CodingNinjaStudio = () => {
  return (
    <div className="Maincotinaer">
      <div>
        <h1>Coding Ninjas Studio</h1>
        <h2>A platform to help you practice, compete & get ready for interviews.</h2>

        <p>
        A place for aspiring and experienced programmers to prepare for tech interviews, practice problems, compete in challenges, discuss and stay up to date with the latest developments in the tech world.        </p>

        <p>We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines.</p>

        
        <br />

        <div className="inetrnalCards">
          <div className="INternalCardsWidth">
            <h2>250 + </h2>
            <p>Interview experiences</p>
          </div>
          
          <div className="INternalCardsWidth">
            <h2>50 +</h2>
            <p>Interview problems with solutions</p>
          </div>
        </div>

       
      </div>

      <div>
        <img src="https://files.codingninjas.in/mask-group-9667.png" alt="" />
      </div>
    </div>
  )
}

export default CodingNinjaStudio