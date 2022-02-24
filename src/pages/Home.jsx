import React from 'react'
import Navbar from '../components/Navbar'
import styled, { keyframes } from 'styled-components'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import ContactSlide from '../components/ContactSlide'
import { useState, useRef, useEffect, useMemo } from 'react'
import useElementObserver from '../hooks/useElementObserver'
import PulsatingCursor from '../components/PulsatingCursor'
import Skills from '../components/Skills'

const Canvas = styled.canvas`
  height: ${props=> props.height ? props.height : "89.5vh"};
  width: 100%;
  margin: 0;

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

const ProjectsContainer = styled.div`
  /* background-color: #1f2833; */
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100vh;
  padding: 5rem 0;
  left: 0;
  right: 0;
  margin: auto;
`

const ProjectInfo = styled.h2`
  color: #66FCF1;
  font-size: 45px;
`
const SkillsContainer = styled.div`
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100vh;
  padding: 5rem 0;
  left: 0;
  right: 0;
  margin: auto;
`

function Home() {

  console.log(ProjectsContainer);

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

  // console.log(isVisibleDesc1);
  
  //canvas height calculation
  const projectsHeightRef = useRef();


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
      setVisibility({...visibility, 
        desc2: true
    })}
    
  }, [isVisibleDesc1, isVisibleHeadline, isVisibleDesc1])

  // console.log(visibility.headline);

  //typing effect
  const [typingText, setTypingText] = useState({
    headline: [],
    desc1: [],
    desc2: []
  });

  const headlineText = "Hi, my name is Dimitar, I'm a web developer";
  const desc1Text = "A website for a real estate company where brokers can post the properties they sell. Users can then view those properties and sort them by price, size etc as well as search by location.";
  const desc2Text = "A fun React app I created that compares the search vs competition for jobs in different US states. It uses Google Search API, Google Trends API and Census API. Users can add jobs they are interested it, see and sort the results as well as delete jobs."

  useEffect(() => {
    if(visibility.headline && !headlineRef.current.childNodes[0].length) typeWriteHeadline([headlineText], "headline");

  },[visibility.headline])

  useEffect(() => {
    if(visibility.desc1 && typingText.desc1.length === 0 && typingText.headline.length===headlineText.length) {
      
      typeWriteHeadline([desc1Text], "desc1", 50);
    }

  },[visibility.desc1, typingText.headline])

  useEffect(() => {
    if(visibility.desc2 && typingText.desc2.length === 0 && typingText.desc1.length===desc1Text.length) typeWriteHeadline([desc2Text], "desc2", 50)

  },[visibility.desc2, typingText.desc1])


  function typeWriteHeadline(messageArray, position, speed=100) {

    console.log(typingText.headline);

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

  return (
    <div className="main-cont">
      <Navbar/>
      <Canvas id='canvas'/>
      <HeroWrapper>
          <Headline ref={headlineRef}>{typingText.headline}
            <PulsatingCursor />
          </Headline>
          <HeroPar>React front-end</HeroPar>
          <MainButton>Projects</MainButton>
          <MainButton>Contact</MainButton>
      </HeroWrapper>
      <ContactSlide/>
      <Canvas height={projectsHeightRef.current && projectsHeightRef.current.clientHeight} id='canvas'/>
      <ProjectsContainer id='projectsContainer' ref={projectsHeightRef}>
        <ProjectInfo>Projects</ProjectInfo>
        <Projects descRef={desc1Ref} title={"Vesta-s real estate agency website"} technology={["Technology:", "HTML", "CSS/SASS", "Javascript", "Node.js/Express", "MongoDB"]} info={typingText.desc1} img={'/images/vesta-s.png'}/>
        <Projects descRef={desc2Ref} title={"Compare States App"} technology={["Technology:", "React", "React Router", "React Tables", "Node.js/Express", "MongoDB"]} info={typingText.desc2} img={'/images/compare-states.png'}/>
        
      </ProjectsContainer>
      <SkillsContainer>
        <Skills></Skills>
      </SkillsContainer>
      
      
      <Footer/>
    </div>
  )
}

export default Home