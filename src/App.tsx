import Navbar from "./components/Navbar"
import HeroSection from "./components/Herosection"
import HowItWorks from "./components/HowItWorks"
import ServicesSection from "./components/Services"
import WhyB2T from "./components/WhyB2T"
import Form from "./components/Form"
import FooterBar from "./components/Footer"

function App() {


  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <WhyB2T />
      <Form />
      <FooterBar />
    </div>
  )
}

export default App
