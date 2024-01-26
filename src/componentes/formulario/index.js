import { useState } from "react";
import Botao from "../botao";
import Campo from "../campo";
import ListaSupensa from "../listaSuspensa";

import "./formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [image, setImage] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [corCategoria, setCorCategoria] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Clicou no botão"); // Adicione esta linha
    props.aoLivroCadastrado({
      nome,
      autor,
      image,
      categoria,
      nomeCategoria,
      corCategoria,
    });

    setNome("");
    setAutor("");
    setImage("");
    setCategoria("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha com as informações dos livros:</h2>
        <Campo
          type="text"
          obrigatorio={true}
          label="Nome do Livro"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          type="text"
          obrigatorio={true}
          label="Autor"
          placeholder="Digite o nome do autor"
          valor={autor}
          aoAlterado={(valor) => setAutor(valor)}
        />
        <Campo
          type="text"
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={image}
          aoAlterado={(valor) => setImage(valor)}
        />
        <ListaSupensa
          obrigatorio={true}
          label="Categoria"
          itens={props.categoriasLivros}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />

        <Botao texto="Criar Card" />
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarCategoria({ nome: nomeCategoria, cor: corCategoria });
          setNomeCategoria("");
          setCorCategoria("");
        }}
      >
        <h2>Crie uma nova Categoria:</h2>
        <Campo
          type="text"
          obrigatorio={true}
          label="Nome da nova categoria"
          placeholder="Digite o nome da categoria"
          valor={nomeCategoria}
          aoAlterado={(valor) => setNomeCategoria(valor)}
        />
        <Campo
          type="color"
          obrigatorio={true}
          label="Cor da nova categoria (em Hexa)"
          placeholder="Digite a cor da categoria"
          valor={corCategoria}
          aoAlterado={(valor) => setCorCategoria(valor)}
        />

        <Botao texto="Criar nova categoria" />
      </form>
    </section>
  );
};

export default Formulario;
