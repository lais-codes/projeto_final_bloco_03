import { useState } from "react";
import type Categoria from "../../models/Categoria";
import { atualizarCategoria, cadastrarCategoria } from "../../services/Service";


export default function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    descricao: "",
  });

  function handleChange(e: any) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (categoria.id) {
      await atualizarCategoria(categoria);
    } else {
      await cadastrarCategoria(categoria);
    }

    alert("Salvo com sucesso!");
    setCategoria({ descricao: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="descricao"
        value={categoria.descricao}
        onChange={handleChange}
        placeholder="Descrição"
      />

      <button type="submit">Salvar</button>
    </form>
  );
}