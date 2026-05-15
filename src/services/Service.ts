import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export default api;

export const buscar = async () => {
  const response = await api.get("/categorias");
  return response.data;
};

export const cadastrar = async (categoria: any) => {
  const response = await api.post("/categorias", categoria);
  return response.data;
};

export const atualizar = async (categoria: any) => {
  const response = await api.put("/categorias", categoria);
  return response.data;
};

export const deletar = async (id: number) => {
  await api.delete(`/categorias/${id}`);
};