import { Character } from "@/UseCharacters";

import styles from "./Personagem.module.css";

export async function generateStaticParams() {
  try {
    const res = await fetch("https://dragonball-api.com/api/characters?limit=58");
    const data = await res.json();

    if (!data || !Array.isArray(data.items)) {
      throw new Error("Dados da API no formato inesperado.");
    }

    const characters: Character[] = data.items;

    return characters.map((character) => ({
      PersonagemName: encodeURI(character.name)
    }));
  } catch (error) {
    console.error("Erro ao gerar parâmetros estáticos:", error);
    return []; 
  }
}

interface PersonagemProps {
  params: {
    PersonagemName: string;
  };
}

export default async function Personagem({ params }: PersonagemProps) {
  const { PersonagemName } = params;

  try {
    const res = await fetch("https://dragonball-api.com/api/characters?limit=58");
    const data = await res.json();

    if (!data || !Array.isArray(data.items)) {
      throw new Error("Dados da API no formato inesperado.");
    }

    const character = data.items.find((char: Character) => char.name === decodeURI(PersonagemName));

    if (!character) {
      return <p>Personagem não encontrado</p>;
    }

  return (
    <div className={styles.all}>
      <div className={styles.sub_all}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img
              className={styles.img}
              src={character.image}
              alt={character.name}
            />
          </div>
          <div className={styles.text}>
            <h1>{character.name}</h1>
            <h2>{character.affiliation}</h2>
            <p>{character.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
  }
  catch (error) {
    console.error("Erro ao buscar dados do personagem:", error);
    return <p>Erro ao carregar dados do personagem</p>;
  }
}