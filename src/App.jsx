import SiteHeader from "./components/SiteHeader"
import Hero from "./components/Hero"
import HeroBg from "./assets/images/hero-bg.jpeg"
// import Button from "./components/Button"


function App() {
  return (
    <div className="bg-[url('./assets/images/hero-bg.jpeg')]">
      <SiteHeader />

      <Hero />

    </div>
  )
}

export default App
