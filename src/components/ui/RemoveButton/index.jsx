import styles from "./styles.module.scss";

export default function RemoveButton(props) {
  return (
    <button
      className={styles.btn}
      {...props}
    >
      &#10005;
    </button>
  );
};