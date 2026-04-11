import "../index.css";

function EmptyHome() {
  return (
    <div>
      {/* logo */}
      <div>
        <h1 className="logo" class="bg-blue-500 p-4 rounded">
          Stichlab
        </h1>
      </div>
      {/* dash sem projetos */}
      <div>
        <h2>Seus projetos</h2>
        <div>
          <p>
            Você ainda não criou nenhum gráfico
            <br />
            Crie seu primeiro projeto e comece a bordar!
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyHome;
