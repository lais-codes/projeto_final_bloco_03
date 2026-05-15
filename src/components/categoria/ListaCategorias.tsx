import { useEffect, useState } from "react";

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

      <div className="flex flex-wrap gap-6">
        {categorias.map((cat) => (
          <div
            key={cat.id}
            className="w-60 border border-gray-300 rounded-xl p-5 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4">
              {cat.descricao}
            </h2>

            <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
              Deletar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listacategorias;