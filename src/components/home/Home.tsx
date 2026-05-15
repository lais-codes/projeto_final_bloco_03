import homeImg from '../../assets/farmazen.png'

function Home() {
    return (
        <div className="flex justify-center bg-emerald-50 py-10">
            <div className="container flex flex-col items-center text-center gap-8">
                <img
                    src={homeImg}
                    alt="Imagem FarmaZen"
                    className="w-full max-w-7xl rounded-2xl shadow-lg"
                />
                <div className="flex flex-col gap-4">
                    <h2 
                        className="text-5xl md:text-5xl text-emerald-900"
                        style={{ fontFamily: 'Cinzel' }}
                    >
                        Boas-vindas!
                    </h2>
                    <p className="text-2xl text-emerald-700 max-w-3xl" 
                    style={{ fontFamily: 'Cinzel' }}>
                        Aqui você encontra tudo o que precisa para cuidar da sua saúde e bem-estar
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home;