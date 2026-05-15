import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Home />
      </div>

      <Footer />
    </div>
  )
}

export default App