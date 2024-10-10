import React from "react";
import LLogo from "../img/my.jpeg";
import Whatsapp from "../SVG/Whatsapp";
import Twitter from "../SVG/Twitter";
import Insta from "../SVG/Insta";

export default function Footer() {
  return (
    <div
      className="footer mt-1"
      style={{
        minHeight:"300px",
        maxWidth: "1280px",
        marginLeft: "auto",
        padding: "0px",
        marginRight: "auto",
        backgroundColor: "#202020",
      }}
    >
      <main>
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <img alt=""
              style={{ height: "200px", width: "200px", margin: "10px" }}
              src={LLogo}
            ></img>
          </div>
          <div
            className="col-md-6 d-flex mt-4"
            style={{ color: "white", flexDirection: "column" }}
          >
            <h3 style={{ color: "pink" }}>Reach Out Anytime!</h3>
            <p style={{ color: "white" }}>
            I would love to hear from you! If you have any questions, inquiries, or potential collaboration opportunities, please feel free to reach out. I have a strong problem-solving mindset, which allows me to tackle challenges effectively. This quality enables me to work for any role in a company, and I'm always open to discussing new projects and partnerships. Your thoughts and ideas are important to me, and I look forward to connecting and exploring how we can work together! Let’s create something amazing together!


            </p>
          </div>
          <div
            className="col-md-3 d-flex mt-3"
            style={{ color: "white", flexDirection: "column" }}
          >
            <h4 style={{ color: "pink" }}>Contact Me If You Are</h4>
            <p className="m-0">
              {" "}
              <ul>
                <li>An Employee</li>
                <li>A Freelencer</li>
                <li>A Student</li>
                <li>A Startup Founder</li>
                <li>An Enthusiast in Technology
                </li>
              </ul>
            </p>
            <div className="d-flex" style={{marginLeft:"25px"}}>
                <a href="" rel="noreferrer" className="svg" style={{cursor:"pointer"}}>  <Whatsapp/> </a>
                <a href="" rel="noreferrer" className="svg" style={{cursor:"pointer"}}>   <Twitter /></a>
                <a href="" rel="noreferrer" className="svg" style={{cursor:"pointer"}}> <Insta /></a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
