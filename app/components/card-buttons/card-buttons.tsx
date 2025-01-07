'use client'
import { Pokemon, PokemonDetails, PokemonLike } from "@/src/domain/models/pokemon";
import styles from "./card-buttons.module.css";
import { handleWebviewEvent } from "@/app/actions";

export function CardButtons(pokemonDetails: PokemonDetails) {
    const pokemonProps = {
        name: pokemonDetails.pokemon.name,
        types: pokemonDetails.types,
        abilities: pokemonDetails.abilities,
        image: pokemonDetails.imageUrl
    };

    return (
        <div className={styles.cardButtons}>
            <button className={`${styles.button} ${styles.like}`} onClick={() => handleWebviewEvent({ liked: true, ...pokemonProps })}  >Like</button>
            <button className={`${styles.button} ${styles.dislike}`} onClick={() => handleWebviewEvent({ liked: false, ...pokemonProps })} >Dislike</button>
        </div>
    );
}

