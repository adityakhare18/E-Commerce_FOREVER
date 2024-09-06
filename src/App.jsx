import './App.css'
import LandingPage from './components/LandingPage'
import LatestCollections from './components/LatestCollections'
import Navbar from './components/Navbar'
import BestSeller from './components/BestSeller'
import Policies from './components/Policies'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <LandingPage />
      <LatestCollections />
      <BestSeller />
      <Policies />
      <Footer/>
    </>
  )
}

export default App
