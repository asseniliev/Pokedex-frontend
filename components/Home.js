import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'
import Pokemon from '../components/Pokemon'
import Button from '../components/NextBtn'
import { useEffect, useState } from "react";
import backendUrl from '../modules/backendUrl';

function Home() {

  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [pokemonCurrentNumber, setPokemonCurrentNumber] = useState(0);
  const [fetchComplete, setFetchComplete] = useState(false);

  async function fetchNewPokemons() {
    const start = pokemonCurrentNumber + 1;
    const end = pokemonCurrentNumber + 15;
    const url = `${backendUrl}/pokemons/${start}/${end}`;
    const data = await (await fetch(url)).json();
    setPokemonsArray([...pokemonsArray, ...data.pokemons]);
    setPokemonCurrentNumber(pokemonCurrentNumber + 15);
  }


  useEffect(() => {
    const start = 1;
    const end = 10;
    const url = `${backendUrl}/pokemons/${start}/${end}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemonsArray(data.pokemons);
        setPokemonCurrentNumber(15);
      })
  }, [])



  console.log(pokemonsArray);
  const pokemons = pokemonsArray.map((data, i) => {
    return <Pokemon key={i} type={data.type} name={data.name} imgSrc={data.imgSrc} />;
  });

  return (
    <>
      <Head>
        <title>Pokemons</title>
        <meta name="description" content="Fetch random pokemons from API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.body}>
        <h1 className={styles.h1}>Pokedex</h1>
        <div className={styles.pokemonContainer}>
          {pokemons}
        </div>
        <Button fetchNewPokemons={fetchNewPokemons} />
      </main>
    </>
  )
}

export default Home;
