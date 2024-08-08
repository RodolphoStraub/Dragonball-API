export default async function Main() {
  const response = await fetch(
    "https://dragonball-api.com/api/characters?limit=58"
  );

  const resultado = await response.json();
  const personagens = resultado.items

  return (
    <div>
      <h1>DBZ</h1>
      <ul>
        {personagens.map((personagem) => (
          <li key={personagem.id}>{personagem.name}</li>
        ))}
      </ul>
    </div>
  );
}
