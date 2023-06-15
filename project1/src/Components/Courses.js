import React, { useEffect } from "react";
import "../styles/Courses.css";
import CoursesAdded from "./CoursesAdded";
import '../styles/CoursesAdded.css'

import logoCoding from "../../src/Assests/coding-ninjas-logo.jpg";
import { useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/courses")
      .then((res) => {
        console.log(res);
        setCourses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="coursesContainer">
        <h2>Online Coding Courses</h2>
        <p>
          Most loved online coding courses for college students and working
          professional
        </p>

        <div className="buttonCotainer">
          <button className="browse">Browse Popular Course</button>
          <button className="tryForFree">Try for Free</button>
        </div>
      </div>

      <img
        src="https://files.codingninjas.com/gsst-homepage_web-27881.svg"
        alt=""
      />

      <div className="expreinceContainer">
        <h2>What is your work experience?</h2>
        <h3>This will help us recommend the best programs for you.</h3>
      </div>

      <div className="imageCard">
        <div className="cards">
          <div>
            <img
              src="https://files.codingninjas.com/student-24426.png"
              alt=""
            />
          </div>
          <div>
            <h3>No work Experince</h3>
          </div>
          <div>Designed as per college student schedule</div>
        </div>

        <div className="cards">
          <div>
            <img
              src="https://files.codingninjas.com/professional-24427.png"
              alt=""
            />
          </div>
          <div>
            <h3>Having work Experince</h3>
          </div>
          <div>Designed as per working proffesional schedule</div>
        </div>
      </div>

      <div className="allcoursesImage">
        <img
          src="https://files.codingninjas.in/faded-expore-section-24216.svg"
          alt=""
        />
      </div>
      <br />

      {console.log(courses)}

     <div className="CousersConatinerFlex">
     {courses &&
        courses.map((ele) => {
          return <CoursesAdded value={ele} />;
        })}
     </div>

      <div className="Tips">
        <div>
          <h2>Tired of learning from YouTube videos or books?</h2>
          <h3>
            At Coding Ninjas we have invented and perfected the best system to
            learn coding
          </h3>
        </div>

        <div className="tipsCardsContainer">
          <div>
            <img
              src="https://files.codingninjas.in/single-source-of-learning-11486.png"
              alt=""
            />
          </div>

          <div>
            <div className="display">
              <img
                src="https://files.codingninjas.in/single-source-of-learning-icon-11483.svg"
                alt=""
              />
              <h2 className="margin ">Single source of learning</h2>
            </div>
            <ul className="ulist">
              <li>
                Stop switching between sources depending on where the topic is
                explained better
              </li>
              <li>Never miss out on any topics</li>
              <li>
                Save time and energy that you can use to practice problems
              </li>
            </ul>
          </div>
        </div>

        <br />

        <div className="tipsCardsContainer">
          <div>
            <div className="display">
              <img
                src="https://files.codingninjas.in/stay-motivated-till-end-icon-11484.svg"
                alt=""
              />
              <h2 className="margin ">Stay motivated till end </h2>
            </div>
            <ul className="ulist">
              <li>
                Fixed milestones that show you exactly where you are and how
                much more you need to do
              </li>
              <li>
                Assignments and tests to ensure that you have completely
                understood the conceptss
              </li>
              <li>
                Solve your doubts immediately instead of wasting time on forums
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://files.codingninjas.in/stay-motivated-till-end-11489.svg"
              alt=""
            />
          </div>
        </div>

        <br />

        <div className="tipsCardsContainer">
          <div>
            <img
              src="https://files.codingninjas.in/keep-learning-while-coding-11485.png"
              alt=""
            />
          </div>

          <div>
            <div className="display">
              <img
                src="https://files.codingninjas.in/keey-coding-while-learning-icon-11482.svg"
                alt=""
              />
              <h2 className="margin ">Keep coding while learning</h2>
            </div>
            <ul className="ulist">
              <li>Keep writing code instead of just watching videos</li>
              <li>Rigorous test cases that forces you to improve your code</li>
              <li>
                Integrated coding environment that does not require any
                additional tools
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="offers">
        <h3>What Coding Ninjas has to offer</h3>

        <div className="facility">
          <div className="faciltyCardLeft">
            <div className="internalDicswithlogo">
              <img
                src="https://files.codingninjas.com/courses-v2-offer-1-11470.svg"
                alt=""
              />
              <div className="headings">
                <h2>Faculty</h2>
                {/* <p>Experienced faculty from IIT, Stanford, IIIT’s, Facebook and Amazon</p> */}
              </div>
            </div>

            <div className="internalDicswithlogo">
              <img
                src="https://files.codingninjas.com/courses-v2-offer-2-11471.svg"
                alt=""
              />
              <div>
                <h2>Curriculum</h2>
                {/* <p>Personalised course syllabus designed with the industry standards</p> */}
              </div>
            </div>

            <div className="internalDicswithlogo">
              <img
                src="https://files.codingninjas.com/courses-v2-offer-3-11472.svg"
                alt=""
              />
              <div>
                {" "}
                <h2>Certificate</h2>
                {/* <p>Industry recognised certificate after you finish your course</p> */}
              </div>
            </div>

            <div className="internalDicswithlogo">
              <img
                src="https://files.codingninjas.com/courses-v2-offer-4-11473.svg"
                alt=""
              />
              <div>
                {" "}
                <h2>Teaching Assistant</h2>
                {/* <p>Doubt Resolution through 1000+ TAs, via Audio /Video Call/Screen Sharing</p> */}
              </div>
            </div>
          </div>

          <div className="faciltyCardRight">
            <div className="internalDicswithlogo">
              <img
                src="https://files.codingninjas.com/courses-v2-offer-5-11474.svg"
                alt=""
              />
              <div className="headings">
                <h2>7 days refund policy</h2>
                {/* <p>Get your money back within 7 days upon discontinuing a course</p> */}
              </div>
            </div>

            <div className="internalDicswithlogo">
              <img
                src="https://files.codingninjas.com/courses-v2-offer-6-11475.svg"
                alt=""
              />
              <div>
                <h2>Slack Community</h2>
                {/* <p>Interact & learn with your batchmates via Slack Groups</p> */}
              </div>
            </div>

            <div className="internalDicswithlogo">
              <img
                src="https://files.codingninjas.com/courses-v2-offer-7-11476.svg"
                alt=""
              />
              <div>
                <h2>No cost EMI</h2>
                {/* <p>Get your money back within 7 days upon discontinuing a course</p> */}
              </div>
            </div>

            <div className="internalDicswithlogo">
              <img
                src="https://files.codingninjas.com/courses-v2-offer-8-11477.svg"
                alt=""
              />
              <div>
                <h2>Premium hirist account</h2>
                {/* <p>Get a Premium Hirist Account on achieving more than 90% in any one of Data & Development, Interview Prep or Foundation courses</p> */}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <br />

      <div className="alignment">
        <h2>Ready To start learning ? </h2>

        <button className="backtocourse">Back to Courses</button>
      </div>

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

      <br />

      <div className="ImportantLinksCotanier">
        <h2>Important Links</h2>
        <div>
          <span className="Links">CODING COURSES FOR BEGINNERS : </span>
          <a href="https://www.codingninjas.com/">
            C++ Foundation with Data Structures |{" "}
          </a>
          <a href="https://www.codingninjas.com/">
            JAVA Foundation with Data Structures |
          </a>
          <a href="https://www.codingninjas.com/">
            Interview Preparation for Product Companies |
          </a>
          <a href="https://www.codingninjas.com/">
            Competitive Programming Course |
          </a>
          <a href="https://www.codingninjas.com/">
            Python Foundation with Data Structures |
          </a>
          <a href="https://www.codingninjas.com/">
            Aptitude Preparation Course
          </a>

          <br />
          <br />

          <span className="Links">ADVANCED CODING COURSE: </span>
          <a href="https://www.codingninjas.com/">
            {" "}
            Advanced Front-End Web Development with React |
          </a>
          <a href="https://www.codingninjas.com/">
            Machine Learning and Deep Learning Course |
          </a>
          <a href="https://www.codingninjas.com/">
            Full Stack Web Development Course |
          </a>
          <a href="https://www.codingninjas.com/">
            Data Science & Machine Learning Complete |
          </a>
          <a href="https://www.codingninjas.com/">Operating Systems |</a>
          <a href="https://www.codingninjas.com/">System Design |</a>
          <a href="https://www.codingninjas.com/">Database Management System</a>

          <br />
          <br />

          <span className="Links">FREE TRIAL:</span>
          <a href="https://www.codingninjas.com/">
            Java Foundation with Data Structures |
          </a>
          <a href="https://www.codingninjas.com/">Competitive Course |</a>
          <a href="https://www.codingninjas.com/">
            Aptitude Preparation Course |
          </a>
          <a href="https://www.codingninjas.com/">
            Python Foundation with Data Structures |
          </a>
          <a href="https://www.codingninjas.com/">
            Advanced Front-End Web Development with React |
          </a>
          <a href="https://www.codingninjas.com/">
            Data Science & Machine Learning Complete |
          </a>
          <a href="https://www.codingninjas.com/">
            Interview Preparation for Product Companies |
          </a>
          <a href="https://www.codingninjas.com/">Machine Learning Course</a>

          <br />
          <br />

          <span className="Links">FREE CONTENTS:</span>
          <a href="https://www.codingninjas.com/">
            C++ Foundation with Data Structures |
          </a>
          <a href="https://www.codingninjas.com/">
            Java Foundation with Data Structures |
          </a>
          <a href="https://www.codingninjas.com/">
            Competitive Programming Course |
          </a>
          <a href="https://www.codingninjas.com/">
            Aptitude Preparation Course |
          </a>
          <a href="https://www.codingninjas.com/">
            Python Foundation with Data Structures |
          </a>
          <a href="https://www.codingninjas.com/">
            Advanced Front-End Web Development with React |
          </a>
          <a href="https://www.codingninjas.com/">
            Data Science & Machine Learning Complete |
          </a>
          <a href="https://www.codingninjas.com/">
            Interview Preparation for Product Companies
          </a>
        </div>
      </div>

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

export default Courses;