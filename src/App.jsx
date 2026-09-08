import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"


function App() {
 

  return (
    <main  className="border h-dvh bg-[#030712]">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element= {<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  )
}

export default App
