import React from "react"
import "./Header.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default () => (
  <header className="header">
    <div className="name-container">
      <h1 className="name">
        Spencer <span className="last">Knowlton</span>
      </h1>
      <h3 className="my-title">Full Stack Web Developer</h3>
    </div>
    <div className="icon-container">
      <a href="https://github.com/Cuthbert20">
        <FaGithub className="icon icon-1" size={50} />
      </a>
      <a href="https://www.linkedin.com/in/spencer-knowlton-8607ba162/">
        <FaLinkedin className="icon icon-2" size={50} />
      </a>
    </div>
  </header>
)
