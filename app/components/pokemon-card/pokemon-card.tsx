import Image from "next/image";
import styles from "./pokemon-card.module.css";
import { CardButtons } from "../card-buttons/card-buttons";
import { Pokemon, PokemonDetails } from "@/src/domain/models/pokemon";

export default function PokemonCard({ pokemonDetails }: { pokemonDetails: PokemonDetails }) {

  return (
    <div className={styles.card} data-testid="pokemon-card">
      <div className={styles.imageWrapper} data-testid="image-wrapper">
        <Image
          src={pokemonDetails.imageUrl}
          width={120}
          height={120}
          alt={`${pokemonDetails.pokemon.name} image`}
          loading="lazy"
          className={styles.image}
          data-testid="pokemon-image"
        />
      </div>
      <h3 className={styles.name} data-testid="pokemon-name">{pokemonDetails.pokemon.name}</h3>

      <p className={styles.types} data-testid="pokemon-types">
        {pokemonDetails.types.join(', ')}
      </p>

      <p className={styles.abilities} data-testid="pokemon-abilities">
        {pokemonDetails.abilities.join(', ')}
      </p>

      <CardButtons {...pokemonDetails} />
    </div>
  );
}
