import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    background-color: #0B0C10;
    height: 4rem;
    z-index: 5;
    padding-top: 2rem;
`

const LinksUl = styled.ul`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0;
    padding-top: 1rem;
`

const Links = styled.div`
    color:#66FCF1;
    cursor: ${props => props.link === "link" && "pointer"};
    z-index: 10;
`





const Footer = ({scrollTop, scrollAbout}) => {

  return (
    <Container>
        <LinksUl>
            <Links >Copyright &copy; 2021</Links>
            <Links link="link" onClick={() => scrollTop()}>Home</Links>
            <Links link="link" onClick={() => scrollAbout()}>About</Links>
        </LinksUl>
    </Container>
  )
}

export default Footer