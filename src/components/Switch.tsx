import React from 'react'
import {Switch as SwitchAnt} from 'antd'

import {useSwitchThemeContext} from '../helpers/SwitchHelper'


export const InfoSwitch: React.FC = () => {
  const { on } = useSwitchThemeContext()
  const isOn = on ? 'light mode' : 'dark mode'
  return (
    <h2> Switch to { isOn }</h2>
  )
}

export const RenderSwitch: React.FC = () => {
  const { on, toggle } = useSwitchThemeContext()
  return(
    <SwitchAnt checked={on} onChange={() => toggle()} />
  )
}

export const Switch = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
)

Switch.RenderSwitch = RenderSwitch
Switch.InfoSwitch = InfoSwitch
