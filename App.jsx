import { useEffect, useState } from "react";
import "./App.css";

const API = "http://127.0.0.1:8000/api/albuns/"; 

function App() {
  const [albuns, setAlbuns] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [artista, setArtista] = useState("");
  const [ano, setAno] = useState("");
  const [avaliacao, setAvaliacao] = useState("");

  function carregarAlbuns() {
    fetch(API)
      .then((res) => res.json ())
      .then((dados) => setAlbuns(dados));
  } 

  useEffect(() => {
    carregarAlbuns();
  } , []);

  function cadastrar(evento) {
   evento.preventDefault();

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "aplication/json"},
      body: JSON.stringify({ titulo, artista, ano: Number(ano), avaliacao: Number(avaliacao) }),
    }).then(() => {
      setTitulo("");
      setArtista("");
      setAno("");
      setAvaliacao("");
      carregarAlbuns();
    });
  }

  return (
    <div className="pagina">
      <h1>Cadastro de albuns</h1>

      <form onSubmit={cadastrar}>
        <input
          placeholder="Titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <input
          placeholder="Artista"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          required
        />
        <input
          placeholder="Ano"
          type="number"
          step="0.1"
          min="0"
          max="2026"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          required
        />
        <input
          placeholder="Avaliacao"
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={avaliacao}
          onChange={(e) => setAvaliacao(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form> 

      <h2>Albuns cadastrados</h2>
      <ul>
        {albuns.map((album) => (
          <li key={album.id}>
            {album.titulo}  · artista {album.artista} · ano {album.ano} · avaliacao {album.avaliacao} 
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default App;