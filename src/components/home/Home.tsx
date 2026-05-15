function Home() {
  return (
    <div className="flex justify-center bg-white">
      <div className="container grid grid-cols-2 text-black">
        
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">
            Boas Vindas!
          </h2>

          <p className="text-xl">
            Aqui você encontra medicamentos e cuidados para sua saúde.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/generationbr/folha_rosa.png"
            alt="Imagem Home"
            className="w-2/3"
          />
        </div>

      </div>
    </div>
  )
}

export default Home