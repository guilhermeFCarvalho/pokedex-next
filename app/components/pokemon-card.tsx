import Image from "next/image";
import styles from "./pokemon-card.module.css";
import { CardButtons } from "./card-buttons";


type Pokemon = { name: string; url: string };

const getPokemonNumberFromUrl = (url: string): string | null => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : null;
}

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const pokemonNumber = getPokemonNumberFromUrl(pokemon.url);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonNumber}.png`}
          width={120}
          height={120}
          alt={`${pokemon.name} image`}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{pokemon.name}</h3>
      <CardButtons {...pokemon} ></CardButtons>
      
    
    </div>
  );
}

 


