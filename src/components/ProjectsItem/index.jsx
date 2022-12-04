import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

export default function ProjectsItem({ project }) {
  return (
    <li
      className={styles.item}
    >
      <Link
        className={styles.link}
        to={`/projects/${project.id}`}
      >
        {project.name}
      </Link>
    </li>
  );
};