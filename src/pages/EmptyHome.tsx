import "../index.css";

function EmptyHome() {
  return (
    <div className="m-8">
      {/* logo */}
      <div>
        <h1 className="font-pixel text-3xl text-blue-900">StitchLab</h1>
      </div>
      {/* dash sem projetos */}
      <div className="mt-8">
        <h2 className="font-pixel text-2xl text-blue-900">Seus projetos</h2>
        <div className="text-center">
          <p className="font-poppins text text-gray-700">
            Você ainda não criou nenhum gráfico
            <br />
            Crie seu primeiro projeto e comece a bordar!
          </p>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default EmptyHome;
