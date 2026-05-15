function Navbar() {
  return (
    <div className="w-full bg-cyan-800 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <h1 className="font-bold text-2xl">FarmaZen</h1>

        <div className="flex gap-4">
          <span>Home</span>
          <span>Produtos</span>
          <span>Categorias</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar