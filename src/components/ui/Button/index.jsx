import styles from "./styles.module.scss";

export default function Button({ children, ...props }) {
  return (
    <button
      className={styles.btn}
      {...props}
    >
      {children}
    </button>
  );
};