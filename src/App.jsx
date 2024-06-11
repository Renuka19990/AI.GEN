import './App.css'
import { Avatar } from './Components/Avatar'
import Footer from './Components/Footer'
import { Header } from './Components/Header'
import Hero2 from './Components/Hero2'
import Items from './Components/Items'
import { Phase1 } from './Components/Phase1'
import { Phase2 } from './Components/Phase2'
import { Phase3 } from './Components/Phase3'
import { StartButton } from './Components/StartButton'
import Techno from './Components/Techno'


import Tokenomics from './Components/Tokenomics'

function App() {

  return (
    <>
    <div className="figma-app">
      <Header/>
      <Hero2/>
      <Avatar/>
      <Techno/>
      <Items/>
      <Tokenomics/>
      <Phase1/>
      <Phase2/>
      <Phase3/>
      <StartButton/>
      <Footer/>

    </div>

    </>
  )
}

export default App
