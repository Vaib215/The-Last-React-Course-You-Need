import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
