import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/zhen-wang-434347212/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/zanewangxx" target='_blank'><IoLogoGithub /></a>
    </div>
  )
}

export default Socials
