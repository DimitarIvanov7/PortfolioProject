import React from 'react'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import PulsatingCursor from './PulsatingCursor'

const Container = styled.div`
    border: 1px solid #66FCF1;
    width: 90%;
    margin: 2rem 0;
    background-color: #1f2833;
`

const Wrapper = styled.div`
    
`

const Headline = styled.h2`
    color: #66FCF1;
    margin: 1.5rem 0;
    font-size: 35px;
    width: 100%;
    text-align: center;
`

const UpPart = styled.div`
    position: relative;
    
`

const DownPart = styled.div`
    color: #66FCF1;
    margin: 1rem 2.3rem;
`

const Description = styled.p`
    font-size: 25px;
    /* height: 6rem; */
    /* min-height: fit-content; */
`

const Button = styled.button`
    background-color: transparent;
    border: 2px solid #66FCF1;
    color: #66FCF1;
    font-size: 32px;
    margin: 2rem 0;
    margin-right: 2rem;
    padding: 5px 10px;
    transition: all .2s ease-out;
    &:hover {
        color: #1f2833;
        background-color: #66FCF1;
        cursor: pointer;
    }
`

const TechnologyUl = styled.ul`
    background-color: #1f2833;
    width: fit-content;
    padding: .5rem 2rem;
    position: absolute;
    height: fit-content;
    top: 0;
    left: 0;
    /* right: 0; */
    bottom: 0;
    /* margin: auto; */
    border: 5px solid #66FCF1;
    transform: translateZ(20px) scaleY(0);
    transform-origin: top;
    transition: .5s;

`

const TechnologyLi = styled.li`
    font-weight: bold;
    font-size: ${props => props.title === "true" ? "35px" : "25px"};
    list-style-type:  ${props => props.title === "true" && "none"};
    color: #66FCF1;
    
`

const Image = styled.div`
    width: 90%;
    margin: 0 auto;
    background: url(${props => props.img});
    background-size: cover;
    height: 25rem;
    transition: all 1s ease-out;
    box-shadow: inset 0 0 0 1000px #66fcf232;
    transform-style: preserve-3d;
    cursor: pointer;
    border: 10px solid #66FCF1;
    border-style: groove;

    &:hover {
        box-shadow: none;
    }

    &:hover ${TechnologyUl} {
        transform: translateZ(30px) scaleY(1);
    }
`

function Projects({title, info, img, technology, descRef}) {

    // console.log(info);

  return (
    <Container>
        <Headline>{title}</Headline>
        <Wrapper>
            <UpPart>
                <Image className='image-tilt' img={img}>
                
                    <TechnologyUl>
                        {technology.map((tech, index) => {
                            if(index===0){
                                return <TechnologyLi key={index} title='true'>{tech}</TechnologyLi> 
                            }
                            else {
                                return <TechnologyLi>{tech}</TechnologyLi> 
                            }
                        })}
                        
                    </TechnologyUl>
                </Image>
            </UpPart>
            <DownPart>
                <Description ref={descRef}>{info} <PulsatingCursor /></Description>
                <Button>Visit</Button>
                <Button>GitHub</Button>
            </DownPart>

        </Wrapper>
    </Container>
  )
}

export default Projects