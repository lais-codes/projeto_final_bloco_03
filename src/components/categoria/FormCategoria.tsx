import { useState, useEffect } from "react";
import type Categoria from "../../models/Categoria";
import { atualizar, cadastrar } from "../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/Service";

export default function FormCategoria() {

  const navigate = useNavigate();
  
  const { id } = useParams();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
  async function buscarCategoria() {
    if (id !== undefined) {
      const response = await api.get(`/categorias/${id}`);
      setCategoria(response.data);
    }
  }
  buscarCategoria();
}, [id]);

  function handleChange(e: any) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {

      if (id) {
        console.log(categoria);
        await atualizar(categoria);
      } else {
        await cadastrar(categoria);
      }

      navigate("/categorias");

    } catch (error) {
      console.log(error);
    }
  }

  return (
  <div className="flex justify-center items-center min-h-screen">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-96 border p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-center">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h2>

      <input
        type="text"
        placeholder="Descrição"
        name="descricao"
        value={categoria.descricao}
        onChange={handleChange}
        className="border rounded-lg p-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-lg"
      >
        Salvar
      </button>
    </form>
  </div>
);
}