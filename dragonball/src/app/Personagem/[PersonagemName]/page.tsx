import useCharacters from "@/UseCharacters";

export default async function Personagem({
  params,
}: {
  params: { PersonagemName: string };
}) {
  const personagens = await useCharacters();

  const personagem = personagens.find((p) => p.name === params.PersonagemName);

  if (!personagem) {
    return <p>Personagem não encontrado</p>;
  }

  return (
    <>
      <img src={personagem.image} alt={personagem.name} />
      <p>nome: {personagem.name}</p>
    </>
  );
}
