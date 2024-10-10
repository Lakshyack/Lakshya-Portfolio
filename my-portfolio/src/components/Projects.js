import React from "react";
import Project1 from "../img/project1.png";
import Project2 from "../img/project2.png";
import Project3 from "../img/project3.png";
import Project4 from "../img/Project4.png";
import SourceCode from "../SVG/SourceCode";
import Projects23 from "../SVG/Projects";
import ArrowRght from "../SVG/ArrowRight"

import Link from "../SVG/Link";
export default function Projects() {
  // const a = () => {};
  // const [hoveredId, setHoveredId] = useState(null); // State to track the hovered card

  const handleClick = (id) => {
    if (id === "A1") {
      document.querySelector("#A1").style.display = "flex";
      document.querySelector("#A1").style.animationName = "sc";
    } else if (id === "A2") {
      document.querySelector("#A2").style.display = "flex";
      document.querySelector("#A2").style.animationName = "sc";
    } else if (id === "A3") {
      document.querySelector("#A3").style.display = "flex";
      document.querySelector("#A3").style.animationName = "sc";
    }
    else if (id === "A4") {
      document.querySelector("#A4").style.display = "flex";
      document.querySelector("#A4").style.animationName = "sc";
    }
  };

  const handleClick1 = async (id) => {
    if (id === "A1") {
      document.querySelector("#A1").style.animationName = "cs";
      await new Promise((resolve) => setTimeout(resolve, 300));
      document.querySelector("#A1").style.display = "none";
    } else if (id === "A2") {
      document.querySelector("#A2").style.animationName = "cs";
      await new Promise((resolve) => setTimeout(resolve, 300));
      document.querySelector("#A2").style.display = "none";
    } else if (id === "A3") {
      document.querySelector("#A3").style.animationName = "cs";
      await new Promise((resolve) => setTimeout(resolve, 300));
      document.querySelector("#A3").style.display = "none";
    }
    else if (id === "A4") {
      document.querySelector("#A4").style.animationName = "cs";
      await new Promise((resolve) => setTimeout(resolve, 300));
      document.querySelector("#A4").style.display = "none";
    }
  };

  const Projects = [
    {
      id: "A1",
      ProjectTechnology : "FrontEnd Project (HTML,CSS)",
      ProjectTitle: "Clone WebSite",
      ProjectDesc:
        "For this project, I have exclusively utilized HTML, CSS, and Bootstrap to create a responsive and visually appealing design. A significant focus of the development process was crafting several animations that enhance the overall user experience, making interactions smooth and engaging. These animations not only improve the aesthetic appeal but also contribute to the functionality of the user interface.",
      image: Project1,
      link: "https://github.com/Lakshyack/GreenThemeClone.git",
    },
    {
      id: "A2",
      ProjectTechnology : "Full-Stack Project (HTML,CSS,Java)",
      ProjectTitle: "Online Bookstore and E-Library Platform",
      ProjectDesc:
        "I developed a WebApp using Java, HTML, CSS, Bootstrap, basic JavaScript, and MySQL. The platform includes an admin email system for managing book updates and controlling pricing. Users can either order physical books or access e-books online after completing payment. To enhance the user browsing experience, books are categorized into Old, Recent, and New sections, making it easier for users to find the titles they are looking for.",
      image: Project2,
      link: "https://github.com/Lakshyack/E-Book-Store.git",
    },
    {
      id: "A3",
      ProjectTitle: "TechBlog - Blog for Technology",
      ProjectTechnology : "Full-Stack Project (HTML,CSS,Java)",
      ProjectDesc:
        "I developed a project named TechBlog utilizing HTML, CSS, JavaScript, Bootstrap, jQuery, Ajax, and MySQL. This platform enables users to update their profiles and post blogs in various categories, including Java, Database, and Python. The project emphasizes dynamic content management and user interaction through a modern web interface.",
      image: Project3,
      link: "https://github.com/Lakshyack/TechBlogg.git",
    },
    {
      id: "A4",
      ProjectTechnology : "FrontEnd Project (HTML,CSS,ReactJS)",
      ProjectTitle: "NewsApp - React Based Application",
      ProjectDesc:
        "I has developed a single-page React application named NewsApp for daily news. The application uses an API from NewsAPI, utilizing an API key to fetch the latest news. It was built using React.js, HTML, CSS, JavaScript, Bootstrap, jQuery, Ajax, and MySQL. The app features a user-friendly interface that allows users to easily browse and read articles from various categories, enhancing their news consumption experience.",
      image: Project4,
      link: "https://github.com/Lakshyack/ReactJS.git",
    },
  ];
    

  // document.addEventListener('click', (event) => {
  //   if (activeLink && !activeLink.contains(event.target)) {
  //     activeLink.classList.remove('active');
  //     activeLink = null; // Reset active link
  //   }
  // });

  return (
    <div style={{maxWidth:"1280px",marginLeft:"auto",padding:"0px",marginRight:"auto"}} >
      <div
        className="container-fluid mt-1 Projects" 
        style={{ backgroundColor: "#202020", color: "white",paddingBottom:"50px",paddingTop:"20px" }}
      >
        <h1 className="text-center d-flex justify-content-center "><Projects23/><span style={{marginLeft:"5px"}}>Projects</span></h1>
        <div className="row justify-content-center mt-3 g-2">
          {Projects.map((Project) => (
            <div className="col-md-6">
            
              <div
                className="card"
                style={{ borderRadius: "40px" }}
                onMouseEnter={() => handleClick(Project.id)}
                onMouseLeave={() => handleClick1(Project.id)}
                data-aos="fade-right"
              >
                <div
                  className="card-body d-flex justify-content-end"
                  style={{
                    backgroundImage: `url(${Project.image})`, // Ensure the image is correct
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "360px",
                    minWidth:"380px",
              
                    overflow: "hidden",
                    margin: "0px",
                    padding: "0px",
                    borderRadius: "40px",
                    flexDirection:"column"
                  }}
                >
                  <div
                    className="card-body-content"
                    id={Project.id}
                    style={{
                      margin: "0px",
                      padding: "0px",
                      borderRadius: "40px",
                      
                    }}
                  >
                    <div>
                    <h5
                      className="card-title text-center mt-2"
                      style={{ color: "black", }}
                    >
                      <b>
                        <u>{Project.ProjectTitle}</u>
                      </b>
                    </h5>
                    <p
                      className="card-text"
                      style={{ margin: "10px 10px 0px 10px", color: "black" }}
                    >
                      {Project.ProjectDesc}
                    </p>
                    </div>
                    <div className="icons">
            
                      <h5 className="d-flex">SourceCode Here  <ArrowRght/> </h5>
                      
                      <a rel="noreferrer" className="svg1" href={Project.link} target="_blank">
                        <SourceCode />
                      </a>
                      <a rel="noreferrer" className="svg1">
                        <Link />
                      </a>

                    </div>
                  </div>
                </div>
                
              </div>
              <div className="d-flex justify-content-center m-3" style={{color:"pink"}}>
              <h3 >{Project.ProjectTechnology}</h3>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
