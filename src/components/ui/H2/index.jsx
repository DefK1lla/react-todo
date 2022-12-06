import styles from "./styles.module.scss";

export default function H2({ children, ...props }) {
  return (
    <h2
      className={styles.title}
      {...props}
    >
      {children}
    </h2>
  );
};