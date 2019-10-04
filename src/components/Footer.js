import React from "react"
import "./Footer.css"
import { IoIosMailOpen } from "react-icons/io"
import { FaLaptopCode } from "react-icons/fa"

export default () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="techs">
        <FaLaptopCode size={40} />
        <h3 className="footer-title">Technology</h3>
      </div>
      <div className="list">
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Styled Components</li>
          <li>PostgreSQL</li>
          <li>Express</li>
          <li>Jest</li>
          <li>BootStrap 4</li>
          <li>Gatsby</li>
        </ul>
      </div>
    </div>
    <div className="footer-container">
      <div className="contact">
        <IoIosMailOpen size={40} />
        <h3 className="footer-title">Contact Info</h3>
      </div>
      <div className="contact-list">
        <img
          className="profile-img"
          src="https://res.cloudinary.com/cuthbert20/image/upload/v1570130386/spencersmallphoto_ap5ay8.png"
          alt=""
        />
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:knowltonspencer@gmail.com">
              knowltonspencer@gmail.com
            </a>
          </li>
          <li>Phone: 435-610-0129</li>
        </ul>
      </div>
    </div>
  </footer>
)
