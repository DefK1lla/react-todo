import { useDispatch } from "react-redux";

import uniqid from "uniqid";

import H1 from "../components/ui/H1";
import ProjectForm from "../components/ProjectForm";
import ProjectsList from "../components/ProjectsList";

import { addProject } from "../store/projectsReducer";

export default function Projects() {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(addProject({ id: uniqid(), name: data }));
  };

  return (
    <>
      <H1>
        Projects
      </H1>
      <ProjectForm
        onSubmit={handleSubmit}
      />
      <ProjectsList />
    </>
  );
};