import styles from "./styles.module.scss";

import { useSelector } from "react-redux";

import { selectProjects } from "../../store/projectsReducer";

import Container from "../layout/Container";
import ProjectsItem from "../ProjectsItem";

export default function ProjectsList() {
  const projects = useSelector(selectProjects).items;

  return (
    <Container>
      <ul
        className={styles.list}
      >
        {
          projects?.length !== 0 &&
          projects.map(prj =>
            <ProjectsItem
              key={prj.id}
              project={prj}
            />
          )
        }
      </ul>
    </Container>
  );
};