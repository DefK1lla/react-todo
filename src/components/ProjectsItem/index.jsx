import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

import RemoveButton from "../ui/RemoveButton";

export default function ProjectsItem({ project }) {
  const handleRemove = (e) => {

  };

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

      <RemoveButton
        onClick={handleRemove}
      />
    </li>
  );
};