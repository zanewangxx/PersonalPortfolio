import React, { useRef } from "react";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Header ref={homeRef} />
            <Nav 
                refs={{
                    home: homeRef,
                    about: aboutRef,
                    experience: experienceRef,
                    portfolio: portfolioRef,
                    contact: contactRef,
                }}
            />
            <section id="about" ref={aboutRef}>
                <About />
            </section>
            <section id="experience" ref={experienceRef}>
                <Experience />
            </section>
            <section id="portfolio" ref={portfolioRef}>
                <Portfolio />
            </section>
            <section id="contact" ref={contactRef}>
                <Contact />
            </section>
            <Footer />
        </>
    );
}

export default App;

