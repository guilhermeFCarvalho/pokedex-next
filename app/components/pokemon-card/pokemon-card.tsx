import Image from "next/image";
import styles from "./pokemon-card.module.css";
import { CardButtons } from "../card-buttons/card-buttons";
import { Pokemon, PokemonDetails } from "@/src/domain/models/pokemon";

export default function PokemonCard({ pokemonDetails }: { pokemonDetails: PokemonDetails }) {

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={pokemonDetails.imageUrl}
          width={120}
          height={120}
          alt={`${pokemonDetails.pokemon.name} image`}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{pokemonDetails.pokemon.name}</h3>

      <p className={styles.types}>
        {pokemonDetails.types.join(', ')}
      </p>

      <p className={styles.abilities}>
        {pokemonDetails.abilities.join(', ')}
      </p>

      <CardButtons {...pokemonDetails} />
    </div>
  );
}




