import { deletarCategoria } from "../../services/Service";

export default function DeleteCategoria({
  id,
  onDelete,
}: {
  id: number;
  onDelete: () => void;
}) {
  async function handleDelete() {
    await deletarCategoria(id);
    onDelete();
  }

  return (
    <button onClick={handleDelete}>
      Deletar
    </button>
  );
}