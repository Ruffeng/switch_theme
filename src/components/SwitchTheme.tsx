import React from 'react'
import styled from 'styled-components'

import {SwitchThemeProvider, useSwitchThemeContext} from '../helpers/SwitchHelper'
import Wrapper from './Wrapper'
import {  Switch } from './Switch'



const Intro : React.FC = () => (
  <h1> Advanced patterns in React </h1>
)

const CompoundIntruder = () => (
  <p> Compound components let's you enter components inside a module, assuring that our code won't break 🎉🎊</p>
)


const SwitchTheme: React.FC = () => {
  return(
    <SwitchThemeProvider>
      <Wrapper>
        <Intro />
        <Switch>
          <Switch.InfoSwitch />
          <Switch.RenderSwitch />
          <CompoundIntruder />
        </Switch>
      </Wrapper>
    </SwitchThemeProvider>
  )
}


export default SwitchTheme
