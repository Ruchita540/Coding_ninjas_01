import React from "react";
import "../styles/Community.css";
import logoCoding from "../../src/Assests/coding-ninjas-logo.jpg";

import CommunitySlider from "./CommunitySlider";

const Practise = () => {
  return (
    <div>
      <CommunitySlider />

      <div className="topicsFundamentalsContainer">
        <h3>SOLVE INTERVIEW PROBLEM BY TOPIC</h3>
        <p>Choose one of the topics to practice coding interview questions</p>

        <div className="topicsFundamentals">
          <div className="topicsFundamentalsItem purple flex">
            Programming Fundamentals
          </div>
          <div className="topicsFundamentalsItem skyblue flex">
            Data Structures{" "}
          </div>
          <div className="topicsFundamentalsItem lightgreen flex">
            Advanced algorithms{" "}
          </div>
          <div className="topicsFundamentalsItem orange flex">
            Maths and Number Theory{" "}
          </div>
        </div>

        <h3>TOP PROBLEM LISTS</h3>
        <p>Curated lists of code problems by top YouTubers and Companies</p>

        <div className="problemsListContainer">
        <br />
          <div className="dipslayColumnFlex">
            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>45 Day Code challenge</p>
            </div>
            <br />

            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Top pointers practise questions </p>
            </div>
            <br />
            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Top strings coding interview questions</p>
            </div>
            <br />
            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Top maths and number theory questions</p>
            </div>
            <br />
            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Mohdmaad firaj Begineer DSA Sheet Problems </p>
            </div>
          </div>

          <div className="dipslayColumnFlex">
         
            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Love Babbar DSA Sheet Problem </p>
            </div>

            <br />

            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Top 100 Sql Problems </p>
            </div>

            <br />
            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Firaj DSA Sheet problems</p>
            </div>

            <br />
            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Nishant Sahar DSA Sheet Problems </p>
            </div>

            <br />
            <div className="displayFlexRow">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/codestudio.codingninjas.com/codestudio/assets/icons/list-item.svg"
                alt=""
              />
              <p>Sidjharth Singh coding Sheet Problems </p>
            </div>
          </div>
        </div>
      </div>

      <br />



      <div className="companyWiseConatner">

      <h3>COMPANY-WISE INTERVIEW EXPERIENCES</h3>
        <p>Read curated interview experiences of top bigwigs to crack your next interview</p>

        <div className="topicsFundamentals">
          <div className="topicsFundamentalsItem image flex">
          <img src="https://files.codingninjas.in/amazon-ps-4659.svg" alt="" />
          </div>
          <div className="topicsFundamentalsItem  image flex">
           <img src="https://files.codingninjas.in/samsung-ps-4658.svg" alt="" />
          </div>
          <div className="topicsFundamentalsItem image flex">
           <img src="https://files.codingninjas.in/microsoft-ps-4657.svg" alt="" />
          </div>
          <div className="topicsFundamentalsItem  image flex">
           <img src="https://files.codingninjas.in/goldman-ps-4656.svg" alt="" />
          </div>
        </div>

      </div>

      <br />

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

export default Practise;