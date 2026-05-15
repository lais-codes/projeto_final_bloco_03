import { useEffect, useState } from "react";
import CardCategoria from "./CardCategoria";
import { Link } from "react-router-dom";

interface Categoria {
  id: number;
  descricao: string;
}

function Listacategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategorias(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar categorias:", error);
      });
  }, []);

  return (
    <div className="w-full min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-8">
        Lista de Categorias
      </h1>

      <Link to="/cadastrarcategoria">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mb-6">
          Nova Categoria
        </button>
      </Link>

      <div className="flex flex-wrap gap-6">
        {categorias.map((cat) => (
          <CardCategoria key={cat.id} categoria={cat} />
        ))}
      </div>
    </div>
  );
}

export default Listacategorias;


