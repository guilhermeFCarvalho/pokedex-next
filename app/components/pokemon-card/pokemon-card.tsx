import Image from "next/image";
import styles from "./pokemon-card.module.css";
import { CardButtons } from "../card-buttons/card-buttons";
import { Pokemon } from "@/src/domain/models/pokemon";








export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={pokemon.image}
          width={120}
          height={120}
          alt={`${pokemon.name} image`}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{pokemon.name}</h3>

      <p className={styles.types}>
        {pokemon.types.join(', ')}
      </p>

      <p className={styles.abilities}>
        {pokemon.abilities.join(', ')}
      </p>

      <CardButtons {... pokemon} />
    </div>
  );
}




