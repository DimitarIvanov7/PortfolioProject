import React from 'react'
import styled, {css} from 'styled-components'
import { FaEnvelope } from 'react-icons/fa';

import { FaPhone } from 'react-icons/fa';

import {desktop, phone} from '../responsive'

const Container = styled.div`
    width: 90%;
    margin: 5rem 0;
`

const AdditinalInfoCont = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;

`

const contactStyled = `
    margin: 0;

    p {
        display: flex;
        justify-content: center;
        align-tems: center;
        color: #66FCF1;
        font-size: 25px;
        text-align: center;
    }

    svg {
        margin-right: 1rem;
    }


`

const EmailContainer = styled.div`

    ${props => props.stiling}

    ${phone({
        fontSize: "15px"
    })}
`

const PhoneContainer = styled.div`

    ${props => props.stiling}

    ${phone({
        fontSize: "15px"
    })}
    
`

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 45%;
    margin: 2rem auto;
    margin-bottom: 0;
    ${desktop({
        width: "65%",
    })}

    ${phone({
        width: "85%",
    })}
    
`

const Headline = styled.h2`
    color: #66FCF1;
    font-size: 45px;
    text-align: center;
    margin-bottom: 2rem;
`

const Name = styled.input`
    color: #66FCF1;
    border: 2px solid #66FCF1;
    font-size: 25px;
    background-color: transparent;
    width: 100%;
    
`

const Email = styled.input`
    color: #66FCF1;
    border: 2px solid #66FCF1;
    font-size: 25px;
    background-color: transparent;
    width: 100%;
`

const Message = styled.textarea`
    color: #66FCF1;
    border: 2px solid #66FCF1;
    font-size: 25px;
    background-color: transparent;
    height: 7rem;
    width: 100%;
`

const Submit = styled.button`
    background-color: transparent;
    border: 2px solid #66FCF1;
    color: #66FCF1;
    font-size: 25px;
    margin: 1rem 0;
    margin-right: 2rem;
    padding: 5px 10px;
    transition: all .2s ease-out;
    width: 30%;
    align-self: flex-start;

    &:hover {
        color: #1f2833;
        background-color: #66FCF1;
        cursor: pointer;
    }
`

function Contact({contactRef}) {
  return (
    <Container >
        <Headline ref={contactRef}>Contact me</Headline>
        <AdditinalInfoCont>
            <EmailContainer  stiling={contactStyled}>
                <p><FaEnvelope/>dimiturivanov92@gmail.com</p>
            </EmailContainer>
            <PhoneContainer stiling={contactStyled}>
                <p><FaPhone/>+359 887 917 209</p>
            </PhoneContainer>
        </AdditinalInfoCont>
        <Wrapper>
            <Name placeholder='name'/>
            <Email placeholder='email'/>
            <Message placeholder='message'/>
            <Submit type='submit'>Send </Submit>
        </Wrapper>
    </Container>
  )
}

export default Contact