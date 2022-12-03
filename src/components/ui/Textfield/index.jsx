import styles from "./styles.module.scss";

export default function Input({ fullwidth, ...props }) {
  return (
    <input
      className={`${styles.input} ${fullwidth ? styles.fullwidth : ""}`}
      type="text"
      {...props}
    />
  );
};