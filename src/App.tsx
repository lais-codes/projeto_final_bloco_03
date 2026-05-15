import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import ListaCategorias from './components/categoria/ListaCategorias'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-50">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App