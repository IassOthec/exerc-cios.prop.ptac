import { useEffect, useState } from "react";

function Exercicio3() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        const resposta = await fetch(
          "https://reqres.in/api/users?page=2"
        );

        const dados = await resposta.json();

        setUsuarios(dados.data);
      } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
      }
    }

    buscarUsuarios();
  }, []);

  return (
    <section>
      <h2>Exercício 3 — Usuários da Página 2</h2>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>
              {usuario.first_name} {usuario.last_name}
            </strong>
            <br />
            Email: {usuario.email}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Exercicio3;