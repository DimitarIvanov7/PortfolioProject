import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
`

const NameContainer = styled.div`
  width: 100%;
  /* height: 15rem; */
  /* margin: 0 1rem; */
  /* overflow-x: hidden; */

  text-align: center;

  canvas {
    width: 100% !important;
    height: 60% !important;
  }
`

const Headline = styled.h2`
  color: #66FCF1;
  font-size: 45px;
  text-align: center;
`

const Text = styled.p`
  font-size: 25px;
  color: #66FCF1;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  
`

function About({aboutRef}) {
  return (
    <Container >
      <Headline ref={aboutRef} >About me</Headline>
      <NameContainer id='particle-text'/>
      <Text>I come from a digital marketing background, created my first WordPress site in 2018. After a couple of years, I learned programming/web development so I can create modern websites from scratch. I first started with Python but then I learned HTML, CSS, Javascript and React.<br></br><br></br>In my free time I like to play sports, play chess, visiting new places and learning new things.</Text>
      
    </Container>

  )
}

export default About