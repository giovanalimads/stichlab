import { useEffect, useState } from "react";
import EmptyHome from "./EmptyHome";
import Dashboard from "./Dashboard";

function Home() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("projects");
    if (data) {
      setProjects(JSON.parse(data));
    }
  }, []);

  if (projects.length === 0) {
    return <EmptyHome />;
  }

  return <Dashboard projects={projects} />;
}

export default Home;
