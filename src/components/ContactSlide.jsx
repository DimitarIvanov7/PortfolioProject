import React from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa';

const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #1f2833;
    border-bottom: 1px solid aqua;
    border-top: 1px solid aqua;
    margin: 0;
`
const Paragraph = styled.p`
    color: #66FCF1;
    font-size: 31px;
    margin: 0 1rem;
    display: flex;
    cursor: pointer;


`


function ContactSlide() {
  return (
    <Container>
        <Paragraph>Let's talk <FaEnvelope style={{
          margin: " .3rem 1rem 0 1rem",
          // padding: "2px"
          }}/>
        </Paragraph>
    </Container>
  )
}

export default ContactSlide