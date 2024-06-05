import React from 'react'
import './experience.css'
import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>Expierence</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>HTML & CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>TypeScript</h4>
                  <small className="text-light">Beginner</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className="text-light">Beginner to Intermediate</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>BootStrap</h4>
                  <small className="text-light">Beginner</small>
                </div>
            </article>
          </div>
        </div>
        {/* ========Break======== */}
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>C#</h4>
                  <small className="text-light">Beginner to Intermediate</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className="text-light">Beginner to Intermediate</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Beginner</small>
                </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className="text-light">Beginner</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
