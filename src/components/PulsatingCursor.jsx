import React from 'react'
import styled, { keyframes } from 'styled-components'


const Blinking = keyframes`
  50% {
    opacity: 0;
  }
`

const PulsatingCurson = styled.span`
  animation: ${Blinking} 1s linear infinite;
`


function PulsatingCursor() {
  return (
    <PulsatingCurson className="cursor-puls">▮</PulsatingCurson>
  )
}

export default PulsatingCursor