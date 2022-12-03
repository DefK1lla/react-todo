import { dispatch, useSelector } from "react-redux";

import H1 from "../components/ui/H1";
import ProjectForm from "../components/ProjectForm";
import { selectProjects } from "../store/projectsReducer";

export default function Projects() {
  const projects = useSelector(selectProjects);

  const handleSubmit = (data) => {
    console.log(data)
  };

  return (
    <>
      <H1>
        Projects
      </H1>
      <ProjectForm
        onSubmit={handleSubmit}
      />
    </>
  );
};