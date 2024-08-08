import styles from "./Cards.module.css";

export default async function Cards() {
  const response = await fetch(
    "https://dragonball-api.com/api/characters?limit=58"
  );

  const resultado = await response.json();
  const personagens = resultado.items;

  return (
    <div className={styles.all}>
      <div className={styles.nav}>
        <h1>Dragon Ball Z</h1>
      </div>
      <div className={styles.cards}>
          {personagens.map((personagem) => (
            <p key={personagem.id}>
              <img src={personagem.image} alt={personagem.name} />
              <h1>Nome:{personagem.name}</h1>
              <h2>Raça:{personagem.race}</h2>
            </p>
          ))}
      </div>
    </div>
  );
}
