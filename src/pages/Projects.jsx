import { useDispatch, useSelector } from "react-redux";

import H1 from "../components/ui/H1";
import ProjectForm from "../components/ProjectForm";
import { addProject, selectProjects } from "../store/projectsReducer";

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  const handleSubmit = (data) => {
    dispatch(addProject(data));
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