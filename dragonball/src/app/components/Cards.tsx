import useCharacters from "@/UseCharacters";
import styles from "./Cards.module.css";
import Link from "next/link";

export default async function Cards() {

  const personagens = await useCharacters();

  return (
    <div className={styles.all}>
      <div className={styles.cards}>
        {personagens.map((personagem) => (
          <div className={styles.inner_cards} key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} />
            <h1>
              Nome: <span className={styles.name_color}>{personagem.name}</span>
            </h1>
            <h2>
              Raça: <span className={styles.name_color}>{personagem.race}</span>
            </h2>
            <Link
              className={styles.button}
              href={`/Personagem/${personagem.name}`}
            >
              Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
