import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Features from "./components/Features"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <NavBar />
      <Hero />
      <Features />
    </div>
  )
}

export default App
