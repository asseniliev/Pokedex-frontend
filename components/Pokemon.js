import styles from "../styles/Pokemon.module.css";
import Image from 'next/image';

export default function Pokemon(props) {
  //props.type - the type of pokemon (electric, fire, ...)
  //props.name - pokemon's name
  //props.imgSrc - the url to the pokemon image

  const pokemonType = props.type;

  return (

    <div className={[styles.pokemon, styles[{ pokemonType }]]}>
      <div className={styles.imgContainer}>
        <Image src={props.imgSrc} alt={props.name} width={120}
          height={120}
        />
      </div>
      <div className="info">
        <h3 className="name">{props.name}</h3>
        <span className="type">Type: <span>{pokemonType}</span></span>
      </div>
    </div>

  );
}