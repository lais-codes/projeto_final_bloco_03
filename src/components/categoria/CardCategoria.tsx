import type Categoria from "../../models/Categoria";

interface Props {
  categoria: Categoria;
  onDelete: (id: number) => void;
}

export default function CardCategoria({ categoria, onDelete }: Props) {
  return (
    <div>
      <h3>{categoria.descricao}</h3>

      <button onClick={() => onDelete(categoria.id!)}>
        Deletar
      </button>
    </div>
  );
}