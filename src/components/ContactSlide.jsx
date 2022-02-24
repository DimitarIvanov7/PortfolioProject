import React from 'react'
import styled from 'styled-components'

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
    margin: 0;

`

function ContactSlide() {
  return (
    <Container>
        <Paragraph>Let's talk</Paragraph>
    </Container>
  )
}

export default ContactSlide