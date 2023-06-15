import React from "react";
import "../styles/InternalHomeRoutes.css";

const GuidedProgram = () => {
  return (
    <div className="Maincotinaer">
      <div>
        <h1>Well Guided Program</h1>
        <h2>We have invented and perfected the best system to learn coding</h2>

        <p>
          Your Journey will follow a tried & Tested method that delivers the
          best results. Each concept that you learn will follow the following
          structure.
        </p>

        <div className="internalList">
          <div>
            <img src="https://files.codingninjas.in/tick-9614.svg" alt="" />
          </div>
          <div>Very short learning videos: 10-15 minutes</div>
        </div>

        <div className="internalList">
          <div>
            <img src="https://files.codingninjas.in/tick-9614.svg" alt="" />
          </div>
          <div>2-3 Guided Problem & 5 practice problem</div>
        </div>

        <div className="internalList">
          <div>
            <img src="https://files.codingninjas.in/tick-9614.svg" alt="" />
          </div>
          <div>Doubts resolved instantly by our Teaching</div>
        </div>
        <br />

        <div className="inetrnalCards">
          <div className="INternalCardsWidth">
            <h2>100+</h2>
            <p>average hours of learning per course</p>
          </div>
          <div className="INternalCardsWidth">
            <h2>50 +</h2>
            <p>practice problems in each course</p>
          </div>
          <div className="INternalCardsWidth">
            <h2>10 +</h2>
            <p>10+ projects per course</p>
          </div>
        </div>
      </div>

      <div>
        <img src="https://files.codingninjas.in/mask-group-9667.png" alt="" />
      </div>
    </div>
  );
};

export default GuidedProgram;