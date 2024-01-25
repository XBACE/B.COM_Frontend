
import { createTheme } from '@mui/system'
import './App.css'
import Navbar from './componets/Navbar'
import Home from './componets/Home'

const theme = createTheme({
  breakpoints:{
    values:{
      xs:0,
      sm:576,
      md:768,
      lg:992,
      xl:1200,
      xxl:1400
    }
  }
})

function App() {
  return (
    <>
    
     <Navbar />
     <Home />
    </>
  )
}

export default App
