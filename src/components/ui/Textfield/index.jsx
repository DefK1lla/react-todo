import styles from "./styles.module.scss";

export default function Input({ fullwidth, multiline, error, ...props }) {
  return (
    <>
      {multiline
        ? <textarea
          className={`${styles.input} ${fullwidth && styles.fullwidth} ${error && styles.error}`}
          type="text"
          {...props}
        />
        : <input
          className={`${styles.input} ${fullwidth && styles.fullwidth} ${error && styles.error}`}
          type="text"
          {...props}
        />
      }
    </>
  );
};