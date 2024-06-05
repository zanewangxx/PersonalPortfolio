import React, { useState, useEffect } from 'react';
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { PiTrolleySuitcase } from "react-icons/pi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Nav = ({ refs }) => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const sections = [
      { id: '#home', ref: refs.home },
      { id: '#about', ref: refs.about },
      { id: '#experience', ref: refs.experience },
      { id: '#portfolio', ref: refs.portfolio },
      { id: '#contact', ref: refs.contact }
    ];

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust as necessary
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach(section => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, [refs]);

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><IoHomeOutline /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineQuestionCircle /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><MdOutlineEventNote /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><PiTrolleySuitcase /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><IoChatboxEllipsesOutline /></a>
    </nav>
  );
}

export default Nav;
