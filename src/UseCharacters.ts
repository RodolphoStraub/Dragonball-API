export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}

interface CharacterResponse {
  items: Character[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string | null;
    next: string | null;
    last: string;
  };
}

export default async function useCharacters(): Promise<Character[]> {
  const response = await fetch("https://dragonball-api.com/api/characters?limit=58");
  const resultado: CharacterResponse = await response.json();
  return resultado.items;
}