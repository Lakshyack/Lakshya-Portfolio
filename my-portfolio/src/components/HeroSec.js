import React, { useEffect} from "react";
// Ensure the path is correct
import Lakshya from "../img/lakshya.png";
import Typed from "typed.js";
import GitHub from "../SVG/Github";
import Insta from "../SVG/Insta";
import Twitter from "../SVG/Twitter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSec() {
  // const [heading, setHeading] = useState("heading1");
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);


  let activeLink = null;

  const handleClick1 = (event) => {
    // Prevent default behavior of the link
    event.preventDefault();
    
    // Check if the link clicked is already active
    if (activeLink === event.currentTarget) {
      // If it is, remove the active class
      activeLink.classList.remove('active');
      activeLink = null; // Reset the active link
    } else {
      // If a different link was clicked, remove the active class from the previous link
      if (activeLink) {
        activeLink.classList.remove('active');
      }
      
      // Add the active class to the current link
      event.currentTarget.classList.add('active');
      activeLink = event.currentTarget; // Set the current link as active
    }
  };
  
  // Event listener to clear active state when clicking outside
  document.addEventListener('click', (event) => {
    if (activeLink && !activeLink.contains(event.target)) {
      activeLink.classList.remove('active');
      activeLink = null; // Reset active link
    }
  });
  





  const handleClick = (Heading) => {
    console.log("heading");
    if (Heading === "heading3") {
      document.getElementById("heading3").style.display = "block";
      document.getElementById("heading2").style.display = "none";
      document.getElementById("heading1").style.display = "none";
      document.querySelector(".Content1").style.display = "none";
      document.querySelector(".Content2").style.display = "none";
      document.querySelector(".Content3").style.display = "block";
    } else if (Heading === "heading2") {
      document.getElementById("heading2").style.display = "block";
      document.getElementById("heading3").style.display = "none";
      document.getElementById("heading1").style.display = "none";
      document.querySelector(".Content1").style.display = "none";
      document.querySelector(".Content2").style.display = "block";
      document.querySelector(".Content3").style.display = "none";
    } else {
      document.getElementById("heading1").style.display = "block";
      document.getElementById("heading2").style.display = "none";
      document.getElementById("heading3").style.display = "none";
      document.querySelector(".Content1").style.display = "block";
      document.querySelector(".Content2").style.display = "none";
      document.querySelector(".Content3").style.display = "none";
    }
  };

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Development.",
        "FrontEnd Development.",
        "Backend Development.",
      ],
      typeSpeed: 70,
      backSpeed: 20,
      loop: true,
    };

    const typed = new Typed(".element", options);

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="cont"style={{maxWidth:"1280px",marginLeft:"auto",padding:"0px",marginRight:"auto"}} >
        <div className="row d-flex HeroSec">
          {/* First Column: Banner Section */}
          <div className="col-md-6">
            <div
              className="banner-background ShortBio"
              style={{
                height: "430px",
                backgroundSize: "cover", // Add this if you want to cover the entire area
              }}
            >
              <div className="introduction">
                <span>Hey, I am </span>
                <h1 data-aos="fade-down">Lakshya</h1>
                <h6>
                  I expert in{" "}
                  <b>
                    <u>
                      <span className="element"></span>
                    </u>
                  </b>
                </h6>
                {/* <h6>I Am Expert in Java for Backend</h6> */}

                <p>
                  {" "}
                   
I have a solid foundation in HTML, CSS, JavaScript, Bootstrap, jQuery, MySQL, Java , Servlet and JSP , React.js. I have developed a web application that demonstrates my full-stack development expertise. Additionally, I'm proficient in MS Office, Excel, and Word, with strong skills in data handling. I am dedicated to learning new tools and languages to stay ahead of industry trends.{" "}
                </p>
                <div className="SocialLinks">
                  <a className="svg1" rel="noreferrer" href="https://github.com/Lakshyack" target="_blank"> 
                    <GitHub />
                  </a>
                  <a className="svg1" rel="noreferrer" href="https://www.instagram.com/drrtech2/" target="_blank">
                    <Insta />
                  </a>
                  <a  className="svg1" rel="noreferrer" href="https://x.com/Lakshya7370"target="_blank">
                    <Twitter />
                  </a>
                </div>
                <div className="ContactMe">
                  <a rel="noreferrer"  href="https://wa.me/918923163204" target="_blank"> Contact Me</a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column: Blob SVG */}
          <div className="col-md-6 HeroSecRight">
            <div className="ConProfilePic" data-aos="fade-right">
              {/* <img src={BloBSVG}/> */}
              <img className="ProfilePic" src={Lakshya} alt="" />
            </div>
          </div>
        </div>

        <div className="AboutMe">
          <div className="row d-flex">
            <div className="col-md-5">
              <div className="ConStandPhoto">
              <img className="StandPhoto" data-aos="fade-left" alt="" src={Lakshya} />
              </div>
             
            </div>
            <div className="col-md-7 AboutSec">
              <h1>About Me</h1>
              <div className="ShortNote">
              I completed my diploma from Government Polytechnic.where I built a strong foundation in technical areas, including HTML, CSS, JavaScript, Bootstrap, jQuery, and MySQL. My studies involved active participation in practical projects, notably developing a web application that showcased my expertise in full-stack development.
              </div>
              <div className="selected-heading">
                <div>
                 <a rel="noreferrer" onMouseEnter={handleClick1} href="#" className="heading1" onClick={() => handleClick("heading1")}><h5
                   
                  >
                    Skills
                  </h5></a>
                  <div id="heading1"></div>
                  
                </div>
                <div>
                <a onMouseEnter={handleClick1} href="#" className="heading2" onClick={() => handleClick("heading2")}><h5
               rel="noreferrer" >
                  Experience
                </h5></a>
                  <div id="heading2"></div>
                </div>
                <div>
                <a rel="noreferrer" href="#" onMouseEnter={handleClick1} className="heading3"  onClick={() => handleClick("heading3")}><h5
                >
                Education
                </h5></a>
                  <div id="heading3"></div>
                </div>
              </div>
              <div className="content">
                 {/* for heading 1 */}
               <div className="Content1">
                    <label>
                      <b>
                        <u>Web Development</u>
                      </b>{" "}
                      :
                    </label>
                    <div className="Skills">
                      <div className="frontend">
                        <u>FrontEnd</u> :<br />{" "}
                        <span>Html, Css, JS, ReactJs</span>{" "}
                      </div>
                      <div className="backend">
                        <u>Backend</u> :<br />{" "}
                        <span>NodeJs, Java, C, C++, C# </span>{" "}
                      </div>
                      <div className="database">
                        <u>Database</u> :<br /> <span>MySql</span>{" "}
                      </div>
                    </div>
                  </div>
                  {/* for heading 2 */}
               <div className="Content2">
                    <label>
                      <b>
                        <u>On-Campus Internship, BTPS Kanpur </u>
                      </b>{" "}
                      :
                    </label>
                    <div className="Skills">
                      <div className="frontend">
                        <u>Internship Duration</u> :<br />{" "}
                        <span>45 Days (From 16 July 2023 - 30 Aug 2023)</span>{" "}
                      </div>
                      <div className="database">
                        <u>Technoogy</u> :<br /> <span>Java WepApp  </span>{" "}
                      </div>
                      <div className="backend">
                        <u>Project Submit</u> :<br />{" "}
                        <span>E-Commerece WebApp</span>{" "}
                      </div>
                      <div className="database">
                        <u>Other</u> :<br /> <span>I haven't done any other internships or jobs so far, but I have built projects to gain experience.</span>{" "}
                      </div>
                    </div>
                  </div>
                  {/* for heading 3 */}
               <div className="Content3">
                    {/* <label>
                      <b>
                        <u>Web Development</u>
                      </b>{" "}
                      :
                    </label> */}
                    <div className="Skills">
                      <div className="frontend">
                        <u>Diploma [2024]</u> :<br />{" "}
                        <span>Completed a diploma from Government Polytechnic, Saharanpur in 2024.</span>{" "}
                      </div>
                      <div className="backend">
                        <u>12th [2021]</u> :<br />{" "}
                        <span>I completed 12th from the UP Board with 75% in 2021. </span>{" "}
                      </div>
                      <div className="database">
                        <u>10th [2019]</u> :<br /> <span>I completed 10th from the UP Board with 81% in 2019.</span>{" "}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
