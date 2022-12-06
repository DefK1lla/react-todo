import styles from "./styles.module.scss";

export default function Button({ children, centered, ...props }) {
  return (
    <button
      className={`${styles.btn} ${centered && styles.btn_center}`}
      {...props}
    >
      {children}
    </button>
  );
};