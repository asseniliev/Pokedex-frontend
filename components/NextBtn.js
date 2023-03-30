import styles from "../styles/NextBtn.module.css";

export default function NextBtn(props) {

  return (
    <button
      className={styles.next}
      onClick={() => props.fetchNewPokemons()}
    >
      Next
    </button >
  );
}