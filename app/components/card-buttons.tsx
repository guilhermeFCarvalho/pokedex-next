'use client'
import styles from "./pokemon-card.module.css";
type Pokemon = { name: string; url: string };


export function CardButtons(pokemon: Pokemon) {


    return (
        <div className={styles.actions}>
            <button className={`${styles.button} ${styles.like}`} onClick={() => window.ReactNativeWebView.postMessage(JSON.stringify({ pokemon, liked: true }))} >Like</button>
            <button className={`${styles.button} ${styles.dislike}`} onClick={() => window.ReactNativeWebView.postMessage(JSON.stringify({ pokemon, liked: true }))}>Dislike</button>
        </div>
    );
}

