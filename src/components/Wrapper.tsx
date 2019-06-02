import React from 'react'
import styled from 'styled-components'
import {useSwitchThemeContext} from '../helpers/SwitchHelper'

const WrapperStyled = styled.div<{on: boolean}>`
background: ${(props) => props.on ? '#2D2A32' : '#FFFFF9' };
& > * {
  color: ${(props) => props.on ? '#FFFFF9' : '#2D2A32' };
  transition: color 1.5s
}
height: 100vh;
transition: background-color 1.5s;
display: flex;
justify-content: center; 
align-items: center;
flex-direction: column;
font-family: Montserrat;
`

const Wrapper: React.FC = ({children}) => {
  const { on } = useSwitchThemeContext()

  return (
    <WrapperStyled on={on}>
      {children}
    </WrapperStyled>
  )
}
export default Wrapper
