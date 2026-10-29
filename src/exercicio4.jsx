import { useEffect, useState } from "react";

function Exercicio4() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function buscarUsuario() {
      try {
        const resposta = await fetch(
          "https://reqres.in/api/users/5"
        );

        const dados = await resposta.json();

        setUsuario(dados.data);
      } catch (erro) {
        console.error("Erro ao buscar usuário:", erro);
      }
    }

    buscarUsuario();
  }, []);

  if (usuario === null) {
    return (
      <section>
        <h2>Exercício 4 — Usuário</h2>
        <p>Carregando...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Exercício 4 — Usuário</h2>

      <h1>
        {usuario.first_name} {usuario.last_name}
      </h1>

      <p>{usuario.email}</p>
    </section>
  );
}

export default Exercicio4;