import DeleteCategoria from "./DeleteCategoria";
import { Link } from "react-router-dom";

export default function CardCategoria({ categoria }: any) {
  return (
  <div className="w-60 border border-gray-300 rounded-xl p-5 shadow-md flex flex-col gap-4">
    
    <h2 className="text-xl font-semibold text-center">
      {categoria.descricao}
    </h2>

    <Link to={`/editarcategoria/${categoria.id}`}>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg w-full">
        Editar
      </button>
    </Link>

    <DeleteCategoria id={categoria.id} />
    
  </div>
);
}