import React from "react"
import Home from "./pages/home"
import AboutMe from "./pages/about-me"
import Experience from "./pages/experience"
import Projects from "./pages/projects"
import Contact from "./pages/contact-me"


export default function App() {
  return (
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
        </div>
      </div>
    </div>
  )
}
