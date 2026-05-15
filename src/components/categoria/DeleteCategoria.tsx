import { deletar } from "../../services/Service";

export default function DeleteCategoria({ id }: any) {

  async function handleDelete() {
    if (window.confirm("Deseja apagar a categoria?")) {
      await deletar(id);

      window.location.reload();
    }
  }
  return (
    
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
    >
      Deletar
    </button>
  );
}