import React from "react";
import "../styles/Scholarship.css";
import scr from "../Assests/Screenshot.png";
import logoCoding from "../../src/Assests/coding-ninjas-logo.jpg";

const Scholarship = () => {
  return (
    <div>
      <div className="firstFlexConmtainer">
        <div className="firstFLexITem">
          <h2 className="ParticipateHeading">Participate and get</h2>
          <h1 className="scholarshipheading">UPTO 100% Scholarship</h1>
          <h2 className="ParticipateHeading">on any course by Coding Ninjas</h2>
          <h6>*Applicable only on non-career camp courses</h6>

          <div>
            <div className="flexrow">
              <h4>13th to 14th June'23</h4>
            </div>
            <div className="flexrow">
              <h4>Results will be announced instantly after test completion</h4>
            </div>
            <button className="regsiter">Register Now</button>
          </div>
        </div>

        <div>
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2023/06/Grand_summer_scholarship_test-1024x657.png"
            alt=""
          />
        </div>
      </div>

      <div className="textHighlightContianer">
        <div className="innerDescription">
          <h2>Test Highlights</h2>
        </div>
        <div className="backgroundcolor display">
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/last-icon-14.png"
            alt=""
            className="cotanerer"
          />
          <div className="innerDescription">15 Aptitude Based MCQs</div>
        </div>
        <div className="backgroundcolor display">
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/last-icon-15.png"
            alt=""
            className="cotanerer"
          />
          <div className="innerDescription">2 Days Window to attempt</div>
        </div>
        <div className="backgroundcolor display">
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/last-icon-16.png"
            alt=""
            className="cotanerer"
          />
          <div className="innerDescription">No Negative Marking</div>
        </div>
      </div>
      <h2 className="alignmentoneScholarshgip">Scholarship Brackets</h2>

      <div>
        <img src={scr} alt="" className="screnshot" />
      </div>

      <div className="PlacementRecords">
        <h2 className="text-align orrangeColor">
          We Have The Best Placement Record
        </h2>
        <h4 className="text-align  purpleoclor">
          You can be next to work in your dream company
        </h4>

        <div className="logoDiplsyacontanewr">
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/ericsoon-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/flipkart-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/goibibo-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/golmansach-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/google-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/ibm-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/adobe-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
        </div>
        <br />
        <br />

        <div className="logoDiplsyacontanewr">
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/paypal-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/oracle-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/morgan-stanly-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/walmart-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/paytm-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/microsoft-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/infoedge-300x75.png"
            className="logocontonaierImages"
            alt=""
          />
        </div>
      </div>

      <div className="diplayFlexforGROUP">
        <div>
          <h2 className="orrangeColor">Take The First Step</h2>
          <p className="towaredsDreramJon">
            towards your Dream Job. Participate in CNSAT and get upto 100%
            Scholarship on any course by Coding Ninja
          </p>

          <button className="registerCNSAT">Register For CNSAT</button>
        </div>

        <div>
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/student--1024x459.png"
            className="imageLogoForTeam"
            alt=""
          />
        </div>
      </div>

      <div className="popularCourseWeOffecontainer">
        <h2 className="text-align">Popular Courses We Offer</h2>

        <div className="dipslayFlexForlanguagecontainer">
          <div className="internalCardLanguage">
            <h3 className="text-align">Data Structures & Algorithms</h3>
            <div className="languageCard">C++</div>
            <div className="languageCard">Java</div>
            <div className="languageCard">Python</div>
          </div>

          <div className="internalCardLanguage">
            <h3 className="text-align">Analytics & Data Scienc</h3>
            <div className="languageCard">
              Data Sceince and Machine Learning
            </div>
            <div className="languageCard">data analytics</div>
          </div>

          <div className="internalCardLanguage">
            <h3 className="text-align">Web Development</h3>
            <div className="languageCard">Mern Stack</div>
            <div className="languageCard">React</div>
          </div>

          <div className="internalCardLanguage">
            <h3 className="text-align">Other Popular Courses</h3>
            <div className="languageCard">
              Product Companies interview preperation{" "}
            </div>
            <div className="languageCard">Competetive Programming</div>
            <div className="languageCard">
              Database Management System (DBMS){" "}
            </div>
          </div>
        </div>
      </div>

      <div className="displayFlexContaneorthird">
        <div className="cardthirdContainer firstContinaer">
          <h2>Participate in CNSAT & Get</h2>

          <ul>
            <li>FREE Access to MAANG Test Series</li>
            <li>Training Certificates</li>
            <li>Coding Ninjas Swags</li>
          </ul>

          <p>*Applicable only on course purchase</p>

          <button className="registerCNSAT">Register For CNSAT</button>
        </div>

        <div className="cardthirdContainer">
          <img
            src="https://www.codingninjas.com/landing/wp-content/uploads/2022/07/GOODIES-12-1-1024x942.png"
            className="imageCardWodthHieght"
            alt=""
          />
        </div>
      </div>

      <div className="FAQcontainer">
        <div className="paddingValue"
    >
          <h2 className="text-align">FAQs</h2>
          <p>
            How much is the Registration Fee for Coding Ninjas Scholarship Test?
          </p>
          <hr />
          <p>
            When will the Coding Ninjas Scholarship Test June'23 results be
            announced?
          </p>
          <hr />
          <p>
            Will I need a Login and Password to attempt the Coding Ninjas
            Scholarship Test?{" "}
          </p>
          <hr />
          <p>If I don’t qualify for the exam, I won’t get any scholarship?</p>
          <hr />
          <p>Does Coding Ninjas provide financial aid?</p>
        </div>
      </div>


      <div className="footerScholarship"> 
      <img src={logoCoding} alt=""  className="logocoding"/>
      <div className="logoContainer2">
        <h4>Privacy Policy</h4>
        <h3>Copyright © Sunrise Mentors Pvt. Ltd.</h3>
      </div>



      </div>
    </div>
  );
};

export default Scholarship;