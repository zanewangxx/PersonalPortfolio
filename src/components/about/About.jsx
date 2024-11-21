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
              <small>5+</small>
            </article>
          </div>

          <p>A recent graduate with a Master’s degree in Information Technology, 
            specializing in software and web development with a strong foundation 
            in UI/UX design. Combines technical expertise with a business background 
            to deliver user-centered digital solutions. 
            Experienced in programming languages such as 
            JavaScript, Python, and C#, as well as frameworks like React, Next.js, 
            and TailwindCSS. Also knowledged in cloud 
            computing, database management, and iOS/.NET application development. 
            Actively seeking entry-level positions, graduate programs, 
            or internships to contribute to innovative projects and 
            further develop expertise in web/software development.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About;
