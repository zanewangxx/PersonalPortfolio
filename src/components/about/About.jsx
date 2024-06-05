import React from 'react'
import './about.css';
import MAIN from '../../asset/main.jpg';
import { GrCertificate } from "react-icons/gr";
import { IoMdOptions } from "react-icons/io";
import { FaRegFolderClosed } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MAIN} alt="Sydney" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GrCertificate className="about__icon" />
              <h5>Degree</h5>
              <small>Master of IT</small><br/>
              <small>Bachelor of Business</small>
            </article>

            <article className="about__card">
              <IoMdOptions className="about__icon" />
              <h5>Preference</h5>
              <small>Web Development</small><br/>
              <small>Software Development</small>
            </article>

            <article className="about__card">
              <FaRegFolderClosed className="about__icon" />
              <h5>Project</h5>
              <small>5+ from Subjects</small>
            </article>
          </div>

          <p>I am a recent graduate with a Master's degree in Information Technology, 
            actively seeking entry-level positions, 
            graduate programs, or internships. 
            My passion lies in web development, 
            particularly front-end development, 
            where I can blend creativity and technical skills. 
            I take great satisfaction in creating user-friendly 
            and visually appealing websites that enhance user experience. 
            Solving complex problems and achieving success 
            in my projects brings me a deep sense of fulfillment.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About;
