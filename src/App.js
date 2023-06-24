import "./styles.css";
import { Titulo } from "./Titulo/Titulo";
import { Botao } from "./Botao/Botao";
import { useState } from "react";

const tarefas = [
  {
    descricao: "Ler Livre O Poder do Hábito",
    status: "pendente"
  },
  {
    descricao: "Jogar The Last of Us 2",
    status: "pendente"
  },
  {
    descricao: "Criar um mundo no Minecraft onde o Harry Potter é o vilão",
    status: "excluida"
  },
  {
    descricao: "Fazer a reforma do meu quarto",
    status: "pendente"
  },
  {
    descricao: "Apresentação cagada do curso",
    status: "concluido"
  }
];

export default function App() {
  const [status, setStatus] = useState("pendente");

  return (
    <div className="App">
      <Titulo descricao="Minhas Tarefas" />
      {/* {/* <div className="botoes"> */}
      <Botao
        status="pendente"
        onClick={() => {
          setStatus("pendente");
        }}
      />
      <Botao
        status="concluida"
        onClick={() => {
          setStatus("concluido");
        }}
      />
      <Botao
        status="excluida"
        onClick={() => {
          setStatus("excluida");
        }}
      />
      {/* </div> */}
      {/* <Tarefas tarefas={[]} /> */}
      <ul>
        {tarefas
          .filter((tarefa) => tarefa.status === status)
          .map((tarefa) => (
            <li className={status}>{tarefa.descricao}</li>
          ))}
      </ul>
    </div>
  );
}
