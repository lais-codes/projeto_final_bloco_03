import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full bg-cyan-800 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <h1 className="font-bold text-2xl">
            FarmaZen
        </h1>

        <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/categorias">Categorias</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;