import styles from "./styles.module.scss";

import Container from "../layout/Container";
import ProjectsItem from "../ProjectsItem";

export default function ProjectsList({ projects }) {
  console.log(projects)
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