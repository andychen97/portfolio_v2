import React from "react"
import Home from "./pages/home"


export default function App() {
  return (
    <div className="body-layout">
      <div className="row">
        <div className="col-1">
          <div className="row home-view">
            <Home />
          </div>
        </div>
      </div>
    </div>
  )
}
