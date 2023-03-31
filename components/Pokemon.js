import styles from "../styles/Pokemon.module.css";
import Image from 'next/image';

export default function Pokemon(props) {
  //props.type - the type of pokemon (electric, fire, ...)
  //props.name - pokemon's name
  //props.imgSrc - the url to the pokemon image

  const pokemonType = props.type;
  console.log(pokemonType);

  return (

    <div className={`${styles.pokemon} ${styles[pokemonType]}`}>
      <div className={styles.imgContainer}>
        <img src={props.imgSrc}
          alt={props.name}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{props.name}</h3>
        <span className={styles.type}>Type: <span>{pokemonType}</span></span>
      </div>
    </div>

  );
}