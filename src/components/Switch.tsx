import React from 'react'
import {Switch as SwitchAnt} from 'antd'

import {useSwitchThemeContext} from '../helpers/SwitchHelper'


const callAll = (...fns: (Function | undefined)[] ) => (...args: any[]) => fns.forEach(fn => fn && fn(...args))

const InfoSwitch: React.FC = () => {
  const { on } = useSwitchThemeContext()
  const isOn = on ? 'light mode' : 'dark mode'
  return (
    <h2> Switch to { isOn }</h2>
  )
}

const useSwitch = () => {
  const { on, toggle } = useSwitchThemeContext()
  const switchProps = ({onChange, ...props}: {onChange: () => void, [key: string]: any}) => {
    return  {
      ...props,
      onChange: callAll(toggle, onChange)
    }
  }
  return {
    switchProps
  }
}

const RenderSwitch: React.FC<{ onChange: () => void }> = ({ onChange } ) => {
  const { on, toggle } = useSwitchThemeContext()
  const {switchProps} = useSwitch()
  return(
    <SwitchAnt checked={on} {
      ...switchProps({
        onChange,
        id: 'my-dynamic-id'
      })
      }
    />
  )
}

export const Switch = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
)

Switch.RenderSwitch = RenderSwitch
Switch.InfoSwitch = InfoSwitch
