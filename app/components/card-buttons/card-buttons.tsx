'use client'
import { Pokemon } from "@/src/domain/models/pokemon";
import styles from "./card-buttons.module.css";

export function CardButtons(pokemon: Pokemon) {

    return (
        <div className={styles.actions}>
            <button className={`${styles.button} ${styles.like}`} onClick={() => window.ReactNativeWebView.postMessage(JSON.stringify({ pokemon, liked: true }))} >Like</button>
            <button className={`${styles.button} ${styles.dislike}`} onClick={() => window.ReactNativeWebView.postMessage(JSON.stringify({ pokemon, liked: false }))}>Dislike</button>
        </div>
    );
}

