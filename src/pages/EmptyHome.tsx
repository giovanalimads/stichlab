import "../index.css";

function EmptyHome() {
  return (
    <div>
      {/* logo */}
      <div>
        <h1 className="text-bl">Stichlab</h1>
      </div>
      {/* dash sem projetos */}
      <div>
        <h2>Seus projetos</h2>
        <div>
          <p>
            Você ainda não criou nenhum gráfico
            <br />
            Crie seu primeiro projeto e comece a bordar! oi
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyHome;
