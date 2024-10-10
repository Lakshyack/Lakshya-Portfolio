import React from "react";
import Mail from "../SVG/Mail";
import ArrowRght from "../SVG/ArrowRight";
import Services from "../SVG/Services";
import Service2 from "../img/Service3.jpg"
import Service1 from "../img/Service4.jpg"

export default function MyServices() {
  const Projects = [
    {
      id: "A1",
      ProjectTitle: "FrontEnd Development",
      ProjectDesc:
        "I have a strong foundation in frontend development technologies such as HTML, CSS, JavaScript, Bootstrap, and jQuery. I am proficient in designing responsive and interactive user interfaces, ensuring seamless user experiences. Additionally, I have expertise in using tools like MS Office, Excel, and Word, with a strong command over data handling and management. I specialize in crafting visually appealing websites tailored to client needs, ensuring both functionality and aesthetics. My focus is always on delivering high-quality, efficient solutions that meet project goals and enhance the end-user experience.",
      image: Service1,
      link: "url_to_book_1",
    },
    {
      id: "A2",
      ProjectTitle: "Full-Stack Development",
      ProjectDesc:
        "In terms of full-stack development, and have worked extensively with MySQL for database management, building web applications that showcase my expertise in both frontend and backend technologies. My experience includes developing dynamic websites with full-stack capabilities, Java, Servlet and JSP, utilizing JavaScript, Ajax, and MySQL. I am adept at creating scalable, secure solutions that meet diverse business requirements. I have a track record of delivering projects on time, ensuring smooth functionality and performance. Additionally, I enjoy learning new tools and programming languages to stay current with the latest industry trends and provide innovative solutions.",
      image: Service2,
      link: "url_to_book_2",
    },
  ];

  return (
    <div className="Services" style={{maxWidth:"1280px",marginLeft:"auto",padding:"0px",marginRight:"auto"}} >
    <div
      className="container-fluid mt-1"
      style={{
        backgroundColor: "#202020",
        color: "white",
        paddingBottom: "50px",
        paddingTop: "20px",
      }}
    >
      <h1 className="text-center d-flex justify-content-center">
        <Services />
        <span style={{ marginLeft: "5px" }}>My Services</span>
      </h1>
      <div className="row Services justify-content-center mt-3 g-5">
        {Projects.map((Project) => (
          <div className="col-md-5 crd-ho" key={Project.id}   data-aos="fade-right">
            <div
              className="card"
              style={{ borderRadius: "40px", padding: "0px", background: "rgb(238, 174, 202)",
                background: "rgb(238, 174, 202)",
                background: "radial-gradient(circle,rgba(238, 174, 202, 1) 0%,rgba(148, 187, 233, 1) 100%)" }}
            
            >
              <div className="ServiceProfile d-flex justify-content-center Service-Card">
                <img
                  src={Project.image}
                  className="card-img-top"
                  alt="Card image"
                  style={{
                    padding: "10px",
                    border: "2px solid pink",
                    borderRadius: "20px",
                    margin: "40px",
                    overflow: "hidden",
                    height: "300px",
                    width: "400px",
                  }}
                />
              </div>
              <div
                className="card-body d-flex justify-content-end" 
                style={{
                  minHeight: "350px",
                  gap:"30px",
                  overflow: "hidden",
                  margin: "0px",
                  padding: "0px",
                  flexDirection:"column",
                 
                }}
              >
                <div  style={{ color: "black",minHeight:"15px" }}>
                  <h5
                    className="card-title text-center"
                   
                  >
                    <b>
                      <u>{Project.ProjectTitle}</u>
                    </b>
                  </h5>
                  <p
                    className="card-text"
                    style={{ margin: "10px 10px 0px 10px", color: "black", minHeight:"330px", padding:"10px"}}
                  >
                    {Project.ProjectDesc}
                  </p>
                </div>
                <div className="icon d-flex justify-content-end" style={{minHeight:"35px"}}>
                  <h5 className="d-flex">
                    Contact Me <ArrowRght />
                  </h5>
                  <a rel="noreferrer" href="https://lakshyak7370@gmail.com" target="_blank">
                   <Mail/>
                  </a>
                 
                </div>
              </div>
           
            <div className="card-footer text-center mt-1 p-3">
            <a rel="noreferrer"
                  href="https://wa.me/918923163204"
                  className="GoTODetails"
                  style={{
                    padding: "12px 10px",
                    backgroundColor: "wheat",
                    borderRadius: "20px",
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                  target="_blank"
                >
                  Contact for more Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
