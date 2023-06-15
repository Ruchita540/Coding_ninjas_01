import React from "react";
import "../styles/Home.css";
import { useState } from "react";
import axios from "axios";

import ladyLogo from "../../src/Assests/lady.jpg";
import logoCoding from "../../src/Assests/coding-ninjas-logo.jpg";
import DynamicRoutesHomePage from "./DynamicRoutesHomePage";
import NavbarHomePage from "./NavbarHomePage";
import gsstimage from '../Assests/banner.jpg'
import Slider from "./Slider";



const Home = () => {

  const [queryUser , setQueryUser ] = useState([])
  const handlechange = (e) => {
    setQueryUser({ ...queryUser, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/query', queryUser).then(res => {console.log("request Sended for queries")}).catch(err => {console.log(err)})
    alert("We will callback you soon")
  };
  return (
    <div className="background">
      <br />
      <br />
      <div className="homeFlexContainer">
        <div className="homeFlexItemLeft">
          <h3 className="Headings heading-one">Be more than a coder </h3>
          <h3 className="Headings heading-two">Be more than a coding ninja </h3>
          <h3 className="Headings heading-three">
            50,000 students from 300 colleges have trusted us .{" "}
          </h3>
          <br />
          <button className="exploreOurPrograms">Explore Our programs</button>
        </div>
        <div>
          <img src={ladyLogo} alt="lady logo not found" id="ladyLogo" />
        </div>
      </div>

      <br />

      <div className="thirdContiner">
        <h2 className="headingThirdcomntainer">
          If you have the courage and the commitment to learn coding , then
          coding ninjas will empower you .{" "}
        </h2>
        <h3 className="headingThirdcomntainer">No matter what it takes. </h3>
        <div className="thirdContainerOptions">
          <div className="innerContainers">
            <img src="https://files.codingninjas.in/boxicon1-9659.svg" alt="" />
            <p>Content designed by IIT & Stanford alumni</p>
          </div>
          <div className="innerContainers">
            <img src="https://files.codingninjas.in/boxicon2-9658.svg" alt="" />
            <p>Instant 1:1 doubt resolution</p>
          </div>
          <div className="innerContainers">
            <img src="https://files.codingninjas.in/boxicon3-9657.svg" alt="" />
            <p>
              Practical learning with 100+ problems & 10+ projects in each
              course
            </p>
          </div>
        </div>
      </div>

      <br />

      <img src={gsstimage} alt="" />
      
      <br />
      <h3 className="inspireHeading">
        15,000+ Coding Ninjas to Inspire You .{" "}
      </h3>

      <button className="HereMoreAboutUs">
        Here more stories from our alumni{" "}
      </button>

      <br />
      <br />

      <div className="whyJoinUsContainer">
        <div className="whyJoinUsContainerflexcontainer">
          <div className="firstContainer">
            <br />
            <button id="whyJoinUsButton">Why join Us ? </button>
            <h2>Great students deserves the best jobs </h2>
            <p>Coding ninjas make it happen . </p>
          </div>
          <div>
            <br/>
            <div className="firstHexanosConatiner">
              <br />
              <div className="workinginFaang">
                <h3>150 + </h3>
                <div>Student Working in FAANG</div>
              </div>
              <br/>

              <div className="startUps">
                <h3>10 + </h3>
                <div>Student started their own company.</div>
              </div>
            </div>
            <br/>
            <div className="firstHexanosConatiner">
              <br />
              <div className="workinginFaang">
                <h3>100 + </h3>
                <div >Having five stars on codechecf</div>
              </div>

              <div className="startUps">
                <h3>70 + </h3>
                <div>Student recived international job  .</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="postedHeading">Our students are posted at</h3>

      <br />

      <div className="companiesLogoContainer">
        <div className="companyfirstRow">
          <img src="https://files.codingninjas.in/google-9542.svg" alt="" />
          <img src="https://files.codingninjas.in/microsoft-9541.svg" alt="" />
          <img src="https://files.codingninjas.in/adobe-9540.svg" alt="" />
          <img src="https://files.codingninjas.in/walmart-9539.svg" alt="" />
          <img src="https://files.codingninjas.in/amazon-9538.svg" alt="" />
          <img src="https://files.codingninjas.in/oyo-9537.svg" alt="" />
        </div>

        <br />
        <div className="companysecondRow">
          <img src="https://files.codingninjas.in/flipkart-9536.svg" alt="" />
          <img
            src="https://files.codingninjas.in/morganstanley-9535.svg"
            alt=""
          />
          <img src="https://files.codingninjas.in/samsung-9534.svg" alt="" />
          <img src="https://files.codingninjas.in/expedia-9533.svg" alt="" />
          <img src="https://files.codingninjas.in/facebook-9532.svg" alt="" />
        </div>
      </div>

      <br />
      <button className="DownloadPlacemnt">Download Placemnt Report</button>

      <br />
      <br />
      <div className="rating ">
        <div className="firstCardRating">
          <h2 className="color fontszie">4.9</h2>
          <div>
            <img src="https://files.codingninjas.in/stars-9613.svg" alt="" />
          </div>
          <p className="color ">100+ reviews</p>
          <h3 className="color fontszie">facebook</h3>
        </div>

        <div className="firstCardRating">
          <h2 className="color fontszie">4.8</h2>
          <div>
            <img src="https://files.codingninjas.in/stars-9613.svg" alt="" />
          </div>
          <p className="color ">1000+ reviews</p>
          <h3 className="color fontszie">Google</h3>
        </div>

        <div className="firstCardRating">
          <h2 className="color fontszie">50 +</h2>
          <div>
            <img src="https://files.codingninjas.in/stars-9613.svg" alt="" />
          </div>
          <p className="color ">5000 Questions Answered</p>
          <h3 className="color fontszie fontStyle">Quora</h3>
        </div>
      </div>
      <br />


      <div className = "dynamicRoutingHomePage">



        <h2  className="text-align">A one stop platform </h2> 
        <p className="text-align">Practice and learn till you are perfect</p>
        
     
        <NavbarHomePage/>
        <DynamicRoutesHomePage/>
        <br/>




      </div>




<br />
      <div className="fadedImage">

        <img src="https://files.codingninjas.in/faded-expore-section-24216.svg" alt="" />
      </div>
      <div className="Queries">
        <div>
          <h3>Have any queries?</h3>

          <p>Get a free counselling session from our experts</p>
          <br />
          <div className="contactSupport">
            <div>
              <img src="https://files.codingninjas.in/call-icon-9597.svg" alt="" />
            </div>
            

            <div className="contactSupportHElpline" >
              <p>Call us on our toll free number</p>
              <h3>1800-123-3598</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="fomrDiv">


            <form className="fomrContainer">
              <input
                type="text"
                name="contact"
                placeholder="contact"
                className="input-field input-szie"
                onChange={handlechange}
              />

              <br />

              <input
                type="text"
                name="name"
                placeholder="name.........."
                className="first-name input-szie"
                onChange={handlechange}
              />

              <br />

              <input
                type="text"
                name="email"
                placeholder="email.........."
                className="first-name input-szie"
                onChange={handlechange}
              />

              <br />

              <input
                type="number"
                name="year"
                placeholder="graduation - year"
                className="first-name input-szie"
                onChange={handlechange}
              />
              <br />

              <button
                type="submit"
                className="Request_callback"
                onClick={handlesubmit}
              >
                Request-Callback
              </button>
            </form>
          </div>
        </div>
      </div>

      <br />

      <div className="vediosContainer">
        <div className="vedioTag">
          <iframe  title="this is vedio tag"
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
          ></iframe>
        </div>

        <div>
          <div>
            <img
              src="https://files.codingninjas.in/newsx_small-5673.png"
              alt=""
            />
          </div>
          <h4>India Inc on Reviving Our Economy NewsX & BW Special</h4>
          <div>
            Ankush Singla, Co-Founder, Coding Ninjas joins a panel discussion
            with other industry stalwarts to talk about the economy in the times
            of COVID-19.
          </div>
        </div>
      </div>

      <h2 className="upcomingEvents">Upcoming Events </h2>

      <Slider/>

      

      <div className="logosTagfooter">
        <div className="logoCodingContainer">
          <img src={logoCoding} alt="" className="logoCoding" />
          <p>Copyright © Sunrise Mentors Pvt. Ltd.</p>
        </div>

        <div className="CodingNinjasHeading">
          <h3>Coding Ninjas</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Pricing & Refund Policy</p>
          <p>Bug Bounty</p>
          <p>Our Students</p>
          <p>Press Release</p>
        </div>

        <div className="products">
          <h3>PRODUCTS</h3>
          <p>Courses</p>
          <p>Try courses for Free</p>
          <p>Career Camp</p>
          <p>Mock Interviews</p>
          <p>Hire Talent</p>
        </div>

        <div className="community">
          <h3> COMMUNITY</h3>
          <p>Coding Ninjas Studio</p>
          <p>Blog</p>
          <p>Events</p>
          <p>Affiliate</p>
          <p>Campus Ninja</p>
          <p>Scholarship Event</p>
          <p>Placement cell</p>
        </div>

        <div className="socialMediaLogosContainer">
          <h3>Follow Us On </h3>
          <div className="socialMediaLogos">
            <img
              src="https://files.codingninjas.in/0000000000003240.png"
              alt=""
            />
            <img
              src="https://files.codingninjas.in/0000000000003241.png"
              alt=""
            />
            <img
              src="https://files.codingninjas.in/0000000000003245.png"
              alt=""
            />
            <img
              src="https://files.codingninjas.in/0000000000003247.png"
              alt=""
            />
            <img
              src="https://files.codingninjas.in/0000000000003242.png"
              alt=""
            />
          </div>

          <h2>Contact US</h2>
          <div className="conatcts">
            <div>
              <img
                src="https://files.codingninjas.in/0000000000003251.png"
                alt=""
              />
            </div>
            <p>1800-123-3598-0908</p>
          </div>
          <div className="eamil">
            <div>
              <img
                src="https://files.codingninjas.in/0000000000003250.png"
                alt=""
              />
            </div>
            <p>cotncodingninjas.com</p>
          </div>
        </div>
      </div>

      <div className="ImportantLinksCotanier">
        <h2>Important Links</h2>
        <div>
          <span className="Links">CODING COURSES FOR BEGINNERS : </span>
          <a href="https://www.codingninjas.com/">C++ Foundation with Data Structures | </a>
          <a href="https://www.codingninjas.com/">JAVA Foundation with Data Structures |</a>
          <a href="https://www.codingninjas.com/">Interview Preparation for Product Companies |</a>
          <a href="https://www.codingninjas.com/">Competitive Programming Course |</a>
          <a href="https://www.codingninjas.com/">Python Foundation with Data Structures |</a>
          <a href="https://www.codingninjas.com/">Aptitude Preparation Course</a>

          <br />
          <br />

          <span className="Links">ADVANCED CODING COURSE: </span>
          <a href="https://www.codingninjas.com/"> Advanced Front-End Web Development with React |</a>
          <a href="https://www.codingninjas.com/">Machine Learning and Deep Learning Course |</a>
          <a href="https://www.codingninjas.com/">Full Stack Web Development Course |</a>
          <a href="https://www.codingninjas.com/">Data Science & Machine Learning Complete |</a>
          <a href="https://www.codingninjas.com/">Operating Systems |</a>
          <a href="https://www.codingninjas.com/">System Design |</a>
          <a href="https://www.codingninjas.com/">Database Management System</a>

          <br />
          <br />

          <span className="Links">FREE TRIAL:</span>
          <a href="https://www.codingninjas.com/">Java Foundation with Data Structures |</a>
          <a href="https://www.codingninjas.com/">Competitive Course |</a>
          <a href="https://www.codingninjas.com/">Aptitude Preparation Course |</a>
          <a href="https://www.codingninjas.com/">Python Foundation with Data Structures |</a>
          <a href="https://www.codingninjas.com/">Advanced Front-End Web Development with React |</a>
          <a href="https://www.codingninjas.com/">Data Science & Machine Learning Complete |</a>
          <a href="https://www.codingninjas.com/">Interview Preparation for Product Companies |</a>
          <a href="https://www.codingninjas.com/">Machine Learning Course</a>

          <br />
          <br />

          <span className="Links">FREE CONTENTS:</span>
          <a href="https://www.codingninjas.com/">C++ Foundation with Data Structures |</a>
          <a href="https://www.codingninjas.com/">Java Foundation with Data Structures |</a>
          <a href="https://www.codingninjas.com/">Competitive Programming Course |</a>
          <a href="https://www.codingninjas.com/">Aptitude Preparation Course |</a>
          <a href="https://www.codingninjas.com/">Python Foundation with Data Structures |</a>
          <a href="https://www.codingninjas.com/">Advanced Front-End Web Development with React |</a>
          <a href="https://www.codingninjas.com/">Data Science & Machine Learning Complete |</a>
          <a href="https://www.codingninjas.com/">Interview Preparation for Product Companies</a>
        </div>
      </div>

      <br />

      <div className="payment_logo">
        <div>We accept payments using:</div>
        <div>
          <img src="https://files.codingninjas.in/visa-5604.png" alt="Error!" />
        </div>
        <div>
          <img
            src="https://files.codingninjas.in/paypal-5603.png"
            alt="Error!"
          />
        </div>
        <div>
          <img src="https://files.codingninjas.in/upi-5602.png" alt="Error!" />
        </div>
        <div>
          <img
            src="https://files.codingninjas.in/no-cost-emi-5601.png"
            alt="Error!"
          />
        </div>
        <div>
          <img
            src="https://files.codingninjas.in/secure-5600.png"
            alt="Error!"
          />
        </div>
        <div>
          <img
            src="https://files.codingninjas.in/encryp-5599.png"
            alt="Error!"
          />
        </div>
        <div>
          <img
            src="https://files.codingninjas.in/razorpay-5598.png"
            alt="Error!"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;