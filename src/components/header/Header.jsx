import React from 'react'
import './header.css'
import CTA from './CTA'
import coding from '../../asset/coding.jpeg'
import Socials from './socials'

const Header = React.forwardRef((props, ref) => {
  return (
    <header id="home" ref={ref}>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Zane</h1>
        <div className="text-light">Web Development Learner</div>
        <CTA />
        <Socials />

        <div className="coding">
          <img src={coding} alt="coding"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
})

export default Header
