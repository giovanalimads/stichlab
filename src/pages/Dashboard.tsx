function Dashboard({ projects }: any) {
  return (
    <div>
      <h1>Seus projetos</h1>

      {projects.map((p, index) => (
        <div key={index}>{p.name}</div>
      ))}
    </div>
  );
}

export default Dashboard;
