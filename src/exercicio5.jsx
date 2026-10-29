import { useEffect, useState } from "react";
import ListaUsuarios from "./ListaUsuarios";

function Exercicio5() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const dados = await resposta.json();

        setUsuarios(dados);
      } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
      }
    }

    buscarUsuarios();
  }, []);

  return (
    <section>
      <h2>Exercício 5 — Lista de Usuários</h2>

      <ListaUsuarios usuarios={usuarios} />
    </section>
  );
}

export default Exercicio5;