import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    background-color: #0B0C10;
    height: 5vh;
    border-bottom: 1px solid #66FCF1;
`

const Wrapper = styled.div`
    margin: 0 1rem;
    
    
`

const MenuItems = styled.ul`
    list-style-type: none;
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 1rem 0;

`

const Item = styled.li`
  cursor: pointer;
  color:#66FCF1;
`

function Navbar() {
  return (
    <Container>
        <Wrapper>
          <MenuItems>
            <Item>01. Home</Item>
            <Item>02. Projects</Item>
            <Item>03. About</Item>
            <Item>04. Contact</Item>
          </MenuItems>
        </Wrapper>
    </Container>
  )
}

export default Navbar