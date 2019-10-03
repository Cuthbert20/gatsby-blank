import React from "react"
import "./Header.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default () => (
  <header className="header">
    <div>
      <h1 className="name">
        Spencer <span className="last">Knowlton</span>
      </h1>
      <h3 className="my-title">Full Stack Web Developer</h3>
    </div>
    <div>
      <FaGithub className="icon" size={40} />
      <FaLinkedin className="icon" size={40} />
    </div>
  </header>
)
