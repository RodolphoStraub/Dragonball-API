import styles from "./Cards.module.css";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default async function Cards() {
  const response = await fetch(
    "https://dragonball-api.com/api/characters?limit=58"
  );

  const resultado = await response.json();
  const personagens = resultado.items;

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
