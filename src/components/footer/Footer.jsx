import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { ImGoogle3 } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href="#"  className="footer__logo">ZANE</a>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/zane-wang-434347212/" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/zanewangxx" target='_blank'><IoLogoGithub /></a>
      <a href="mailto:zane.waynexx@gmail.com" target="_blank"><ImGoogle3 /></a>
      </div>
    </footer>
  )
}

export default Footer
