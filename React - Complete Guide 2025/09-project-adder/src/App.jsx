import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProtectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    const newProject = {
      id: Math.random().toString(),
      title: projectData.title,
      description: projectData.description,
      dueDate: projectData.dueDate,
    };
    setProjectsState((prevState) => {
      return { ...prevState, projects: [...prevState.projects, newProject] };
    });
  }

  console.log(projectsState.projects);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProtectsSidebar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}

export default App;
