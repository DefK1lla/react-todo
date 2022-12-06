import styles from "./styles.module.scss";

import React from "react";

export default function Filefield({ onChange, ...props }) {
  const [fileName, setFileName] = React.useState("File not selected");

  const handleChange = (e) => {
    setFileName(e.target.files[0].name);
    onChange(e.target.files[0]);
  };

  return (
    <label
      className={styles.label}
    >
      <input
        className={styles.field}
        type="file"
        {...props}
        onChange={handleChange}
      />

      <span
        className={styles.btn}
      >
        Select file
      </span>

      {fileName}
    </label>
  );
};