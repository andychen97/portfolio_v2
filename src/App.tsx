import React from "react"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import AboutMe from "./pages/about-me"
import Experience from "./pages/experience"
import Projects from "./pages/projects"
import Contact from "./pages/contact-me"
import SideIcons from "./components/side-icons"
import SideEmail from "./components/side-email"


export default function App() {
  return (
    <div>
      <div className="row">
        <div className="col-1">
          <Navbar />
        </div>
      </div>
      <div className="body-layout">
        <div className="row">
          <div className="col-1">
            <div className="row home-view">
              <Home />
            </div>
            <div className="section-view">
              <AboutMe />
            </div>
            <div className="section-view">
              <Experience />
            </div>
            <div className="section-view">
              <Projects />
            </div>
            <div className="section-view">
              <Contact />
            </div>
            <div className="row text-center">
              <div className="col-1">
                <p className='grey-text footer'>
                  V2 rebuilt with React & TypeScript.<br />
                  Checkout the original at&nbsp;
                  <a href="https://ACDesigns.dev" className='links green-text' target="_blank" rel="noreferrer" >ACDesigns.dev</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row bottom-fixed show-sides">
        <SideIcons />
      </div>
      <div className="row bottom-fixed-right show-sides">
        <SideEmail />
      </div>
    </div>
  )
}
