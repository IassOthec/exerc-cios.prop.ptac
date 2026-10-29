import { useEffect, useState } from "react";

function Exercicio2() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    async function buscarComentarios() {
      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/comments?postId=1"
        );

        const dados = await resposta.json();

        setComentarios(dados);
      } catch (erro) {
        console.error("Erro ao buscar comentários:", erro);
      }
    }

    buscarComentarios();
  }, []);

  return (
    <section>
      <h2>Exercício 2 — Comentários do Post 1</h2>

      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>
            <strong>Nome:</strong> {comentario.name}
            <br />
            <strong>Email:</strong> {comentario.email}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Exercicio2;