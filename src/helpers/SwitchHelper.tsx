import React from 'react'

const SwitchThemeState = React.createContext<boolean>(false)
const SwitchThemeDispatch = React.createContext<(() => void)>(() => {})

export const SwitchThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [on, setOn] = React.useState<boolean>(false)
  const toggle = () => {
    setOn(!on)
  }

  return(
    <SwitchThemeState.Provider value={on}>
      <SwitchThemeDispatch.Provider value={toggle}>
        { children }
      </SwitchThemeDispatch.Provider>
    </SwitchThemeState.Provider>
  )
}


export const useSwitchThemeContext = () => {
  const on = React.useContext(SwitchThemeState)
  const toggle = React.useContext(SwitchThemeDispatch)

  return { on, toggle }
}
