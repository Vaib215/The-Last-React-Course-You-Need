import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <NavBar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
