import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export default api;

export const buscarCategorias = async () => {
  const response = await api.get("/categorias");
  return response.data;
};

export const cadastrarCategoria = async (categoria: any) => {
  const response = await api.post("/categorias", categoria);
  return response.data;
};

export const atualizarCategoria = async (categoria: any) => {
  const response = await api.put(`/categorias/${categoria.id}`, categoria);
  return response.data;
};

export const deletarCategoria = async (id: number) => {
  await api.delete(`/categorias/${id}`);
};