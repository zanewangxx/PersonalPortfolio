import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-detail">
          <h3>Personal Portfolio</h3>
          <a href="https://github.com/zanewangxx/PersonalPortfolio" className="btn" target="_blank">Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-detail">
          <h3>WinFrom Desktop App</h3>
          <a href="https://github.com/zanewangxx/WinFormApp" className="btn" target="_blank">Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-detail">
          <h3>Recreate Game</h3>
          <a href="https://github.com/zanewangxx/RecreateGame" className="btn" target="_blank">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
