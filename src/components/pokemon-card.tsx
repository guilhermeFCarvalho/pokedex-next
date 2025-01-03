"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

type Pokemon = { name: string, url: string }

type PokemonData = {
    height: number;
    weight: number;
    // abilities: Ablility[];
    types: { type: { name: string } }[];
}

const getPokemonNumberFromUrl = (
    url: string
): string | null => {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : null;
};



export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    const pokemonNumber = getPokemonNumberFromUrl(
        pokemon.url
    );
    const [data, setData] = useState<PokemonData | null>(
        null
    );
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(pokemon.url);
                if (!response.ok) {
                    throw new Error("failed to fetch");
                }
                const fetchedData: PokemonData =
                    await response.json();
                setData(fetchedData);
            } catch (error) {
                console.log(error);
                return null;
            }
        };

        fetchPokemonData();
    }, [pokemon.url]);
    return (<div>
        <h3>{pokemon.name}</h3>
        <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonNumber}.png`}
            width={220}
            height={220}
            alt="pokemon image"
            loading="lazy"
        />
    </div>)
}
;
