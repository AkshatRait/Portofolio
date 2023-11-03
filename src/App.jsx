import Timeline from './Components/Timeline'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import AboutMe from './Components/About me'

function App() {

  return (
    <div id="app-container">
      <NavBar />
      <Header />
      <Timeline />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
