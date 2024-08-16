import useCharacters from "@/UseCharacters";

import styles from "./Personagem.module.css";

export default async function Personagem({
  params,
}: {
  params: { PersonagemName: string };
}) {
  const personagens = await useCharacters();

  const personagem = personagens.find((p) => p.name === params.PersonagemName.replaceAll('%20',' '));

  if (!personagem) {
    return <p>Personagem não encontrado</p>;
  }

  return (
    <div className={styles.all}>
      <div className={styles.sub_all}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img
              className={styles.img}
              src={personagem.image}
              alt={personagem.name}
            />
          </div>
          <div className={styles.text}>
            <h1>{personagem.name}</h1>
            <h2>{personagem.affiliation}</h2>
            <p>{personagem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
