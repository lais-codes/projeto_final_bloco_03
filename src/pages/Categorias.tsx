import ListaCategorias from "../components/categoria/ListaCategorias";

function Categorias() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <h1
          className="text-4xl text-emerald-900 font-bold"
          style={{ fontFamily: "Cinzel" }}
        >
          Categorias
        </h1>
      </div>
      <ListaCategorias />
    </div>
  );
}

export default Categorias;