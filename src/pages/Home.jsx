import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import ContactSlide from '../components/ContactSlide'
import { useState, useRef, useEffect, useMemo } from 'react'
import useElementObserver from '../hooks/useElementObserver'
import PulsatingCursor from '../components/PulsatingCursor'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'
import matrixEffect from '../hooks/matrixEffect'

import {desktop, bigTablet, phone} from '../responsive'



const Canvas = styled.canvas`
  height: ${props=> props.height ? props.height : "89.5vh"};
  width: 100%;
  margin: 0;
  ${bigTablet({
    // display: `${props=> props.height ? "none" : "89.5vh"}`
    display: "none"
  })}

`

const HeroWrapper = styled.div`
  margin-top: 12rem;
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  
`

const Headline = styled.h1`
  color: #66FCF1;
  font-size: 47px;
  margin: 0 1rem;
` 
const HeroPar = styled.p`
color: #66FCF1;
font-size: 25px;
margin: .5rem 0;
`

const MainButton = styled.button`
  background-color: transparent;
  border: 2px solid #66FCF1;
  color: #66FCF1;
  font-size: 25px;
  margin: 1rem;
  padding: 5px 10px;
  transition: all .2s ease-out;
  &:hover {
    color: #1f2833;
    background-color: #66FCF1;
    cursor: pointer;
  }
`

const RestPage = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100vh;
  padding: 3rem 0 0 0;
  left: 0;
  right: 0;
  margin: auto;
  ${bigTablet({
    position: "relative",
    top: 0
  })}
`

const ProjectsContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  ${desktop({width:"90%"})}
  ${phone({
      width:"98%"
    })}

`

const ProjectInfo = styled.h2`
  color: #66FCF1;
  font-size: 45px;
`
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 5rem 0;
  margin: 0 1rem;
  width: 100%;
  
`

function Home() {
  //sections refs

  const projectsRef = useRef();

  const skillsRef = useRef();

  const aboutRef = useRef();

  const contactRef = useRef();

  const canvas1Ref = useRef();

  const canvas2Ref = useRef();

  //canvas height calculation
  const projectsHeightRef = useRef();

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // setResstContainerHeight(
    //   projectsHeightRef.current.offsetHeight
    // )
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    matrixEffect([canvas1Ref, canvas2Ref], dimensions)
  }, [])

  const headlineRef = useRef(null);

  const desc1Ref = useRef(null);

  const desc2Ref = useRef(null)

  const options = {
    root:null,
    rootMargin: '0px',
    threshold: 0.3
  }

  const isVisibleHeadline = useElementObserver({
    options
  }, headlineRef);

  const isVisibleDesc1 = useElementObserver({
    options
  }, desc1Ref);

  const isVisibleDesc2 = useElementObserver({
    options
  }, desc2Ref);

  //visibility state
  const [visibility, setVisibility] = useState({
    headline: false,
    desc1: false,
    desc2: false
  });

  //change visibility
  useEffect(() => {
    if(isVisibleHeadline) {
      setVisibility({...visibility, 
        headline: true
    })}

    if(isVisibleDesc1) {
      setVisibility({...visibility, 
        desc1: true
    })}

    if(isVisibleDesc2) {
      console.log("visible");
      setVisibility({...visibility, 
        desc2: true
    })}
    
  }, [isVisibleDesc1, isVisibleHeadline, isVisibleDesc1])

  //typing effect
  const [typingText, setTypingText] = useState({
    headline: [],
    desc1: [],
    desc2: []
  });

  const headlineText = "Hi, my name is Dimitar, I'm a web developer";
  const desc1Text = "Vesta-s real estate agency website";
  const desc2Text = "Compare Jobs in States App"

  useEffect(() => {
    if(visibility.headline && !headlineRef.current.childNodes[0].length) typeWriteHeadline([headlineText], "headline");

  },[visibility.headline])

  useEffect(() => {
    if(visibility.desc1 && typingText.desc1.length === 0 && typingText.headline.length===headlineText.length) {
      
      typeWriteHeadline([desc1Text], "desc1", 80);
    }

  },[visibility.desc1, typingText.headline])

  useEffect(() => {
    if(visibility.desc2) console.log("work");
    
    if(visibility.desc2 && typingText.desc2.length === 0 && typingText.desc1.length===desc1Text.length) typeWriteHeadline([desc2Text], "desc2", 80)

  },[visibility.desc2, typingText.desc1])

  function typeWriteHeadline(messageArray, position, speed=100) {

    let textPosition = 0

    let intr = setInterval(function typewriter () {

      setTypingText({...typingText, 
        [position]: messageArray[0].substring(0,textPosition)
      })

      if(textPosition++ > messageArray[0].length) {
        clearInterval(intr)
      } else {
        textPosition++
      }
    }, speed)
  }

  //scrolling

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollProjects = () => {
    window.scrollTo({top: projectsRef.current.offsetTop + window.innerHeight, behavior: "smooth"})
  }

  const scrollContact = () => {
    window.scrollTo({top: contactRef.current.offsetTop + window.innerHeight, behavior: "smooth"})
  }

  const scrollAbout = () => {
    window.scrollTo({top: aboutRef.current.offsetTop + window.innerHeight, behavior: "smooth"})
  }

  // project infos

  const infoProject1 = "A website for a real estate company where brokers can post the properties they sell. Users can then view those properties and sort them by price, size etc as well as search by location.";

  const infoProject2 = "A fun React app I created that compares the search vs competition for jobs in different US states. It uses Google Search API, Google Trends API and Census API. Users can add jobs they are interested it, see and sort the results as well as delete jobs."

  return (
    <div className="main-cont">
      <Navbar scrollProjects={scrollProjects} scrollAbout={scrollAbout} scrollContact={scrollContact}/>
      <Canvas ref={canvas1Ref} id='canvas'/>
      <HeroWrapper>
          <Headline ref={headlineRef}>{typingText.headline}
            <PulsatingCursor />
          </Headline>
          <HeroPar>Javascript / React front-end</HeroPar>
          <MainButton onClick={() => scrollProjects()}>Projects</MainButton>
          <MainButton onClick={() => scrollContact()}>Contact</MainButton>
      </HeroWrapper>
      <ContactSlide scrollContact={scrollContact}/>
      <Canvas ref={canvas2Ref} height={projectsHeightRef.current && projectsHeightRef.current.clientHeight} id='canvas'/>
      <RestPage ref={projectsHeightRef}>
      
        <ProjectsContainer id='projectsContainer' ref={projectsRef}>
          <ProjectInfo>Projects</ProjectInfo>
          <Projects descRef={desc1Ref} title={typingText.desc1} technology={["Technology:", "HTML", "CSS/SASS", "Javascript", "Node.js/Express", "MongoDB"]} info={infoProject1} img={'/images/vesta-s.png'} redirectSite={"https://vesta-s.dmvprojects.net/"}/>
          <Projects descRef={desc2Ref} title={typingText.desc2} technology={["Technology:", "React", "React Router", "React Tables", "Node.js/Express", "MongoDB"]} info={infoProject2} img={'/images/compare-states.png'} redirectSite={"https://compare-states.dmvprojects.net/"}/>
          
        </ProjectsContainer>
        <SkillsContainer id="skills-container">
          <Skills />
        </SkillsContainer>
        <About aboutRef={aboutRef}/>
        <Contact contactRef={contactRef}/>
      </RestPage>
      
      
      <Footer scrollTop={scrollTop} scrollAbout = {aboutRef.current && scrollAbout}/>
    </div>
  )
}

export default Home