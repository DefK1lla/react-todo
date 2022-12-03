import styles from "./styles.module.scss";

export default function H1({ children, ...props }) {
  return (
    <h1
      className={styles.title}
      {...props}
    >
      {children}
    </h1>
  );
};