import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextOutput from './components/TextOutput'

function App() {

  const [toggle, setToggle] = useState(true)
  const darkTheme = createTheme({
    palette: {
      mode: toggle ? 'dark' : 'light'
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar check={toggle} change={() => setToggle(!toggle)} />
      <TextOutput />
    </ThemeProvider>
  )
}

export default App
