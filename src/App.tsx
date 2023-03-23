import React from "react"
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
      <div className="row bottom-fixed show-sides">
        <SideIcons />
      </div>
      <div className="row bottom-fixed-right show-sides">
        <SideEmail />
      </div>
    </div>
  )
}
