import React from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa';
import {desktop, bigTablet} from '../responsive'

const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #1f2833;
    border-bottom: 1px solid aqua;
    border-top: 1px solid aqua;
    margin: 0;
    ${bigTablet({
      marginTop: "90vh"
    })}
`
const Paragraph = styled.p`
    color: #66FCF1;
    font-size: 31px;
    margin: 0 1rem;
    display: flex;
    cursor: pointer;


`


function ContactSlide({scrollContact}) {
  return (
    <Container>

      <Paragraph onClick={scrollContact}>Let's talk 
            <FaEnvelope style={{
            margin: " .3rem 1rem 0 1rem",
            }}/>
      </Paragraph>
        
          {/* <Paragraph onClick={scrollContact}>Let's talk 
            <Link to='#' onClick={(e) => {
                window.location = "mailto:dimiturivano92@gmail.com";
                console.log("dick");
                e.preventDefault();
                }}>
                <FaEnvelope style={{
                margin: " .3rem 1rem 0 1rem",
                }}/>
           </Link>
          </Paragraph> */}

    </Container>
  )
}

export default ContactSlide