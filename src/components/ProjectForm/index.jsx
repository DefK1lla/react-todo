import styles from "./styles.module.scss";

import React from "react";

import Container from "../layout/Container";
import Textfield from "../ui/Textfield";
import Button from "../ui/Button";

export default function ProjectForm({ onSubmit }) {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <Container>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Textfield
          placeholder="Enter project name"
          onChange={e => setName(e.target.value)}
          fullwidth
        />

        <Button
          type="submit"
        >
          Add
        </Button>
      </form>
    </Container>
  );
};