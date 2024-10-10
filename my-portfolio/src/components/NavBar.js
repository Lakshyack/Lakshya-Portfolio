import React from 'react';
import Works from '../SVG/Works';
import AboutMe from '../SVG/AboutMe';
import Home from '../SVG/Home';
import Service from '../SVG/Service';
import LOGO from "../img/LOGO.png";

export default function NavBar() {
  const scrolForProjects = () =>{
    document.querySelector(".Projects").scrollIntoView({
      behavior:'smooth'
    })
  }
  const scrolForServices= () =>{
    document.querySelector(".Services").scrollIntoView({
      behavior:'smooth'
    })
  }
  const scrolForAboutMe= () =>{
    document.querySelector(".AboutMe  ").scrollIntoView({
      behavior:'smooth'
    })
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{}}>
        <div className="container">
          <a rel="noreferrer" className="navbar-brand" href="/"><img alt='' style={{height:"40px",width:"40px", margin:" 0px 5px 0px 0px"}} src={LOGO}></img>Lakshya</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active d-flex gap-1" style={{cursor:"pointer"}} aria-current="page" href="/"><Home/> Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active d-flex gap-1" style={{cursor:"pointer"}} onClick={scrolForAboutMe} >   <AboutMe/> About Me</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active d-flex gap-1" style={{cursor:"pointer"}} onClick={scrolForProjects}><Works/> Projects</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active d-flex gap-1" style={{cursor:"pointer"}} onClick={scrolForServices}> <Service/> Services</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Name
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
