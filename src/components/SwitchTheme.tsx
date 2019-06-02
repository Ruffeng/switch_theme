import React from 'react'
import styled from 'styled-components'

import {SwitchThemeProvider, useSwitchThemeContext} from '../helpers/SwitchHelper'
import Wrapper from './Wrapper'
import {  Switch } from './Switch'
import Footer from './Footer'

const Paragraph = styled.p`
padding: 20px;
`

const Intro : React.FC = () => (
  <h1> Advanced patterns in React </h1>
)

const CompoundIntruder = () => (
  <Paragraph> Compound components let's you enter components inside a module, assuring that our code won't break 🎉🎊</Paragraph>
)


const SwitchTheme: React.FC = () => {
  return(
    <SwitchThemeProvider>
      <Wrapper>
        <Intro />
        <Switch>
          <Switch.InfoSwitch />
          <Switch.RenderSwitch onChange={()=> alert('This alert is extended functionality from the default onChange')}/>
          <CompoundIntruder />
        </Switch>
        <Footer />
      </Wrapper>
    </SwitchThemeProvider>
  )
}


export default SwitchTheme
