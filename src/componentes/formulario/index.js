import { useState } from "react";
import Botao from "../botao";
import CampoTexto from "../campoTexto";
import ListaSupensa from "../listaSuspensa";

import "./formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [image, setImage] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Clicou no botão"); // Adicione esta linha
    props.aoLivroCadastrado({
      nome,
      autor,
      image,
      categoria,
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
        <CampoTexto
          obrigatorio={true}
          label="Nome do Livro"
          placeholder="Digite seu nome"
          value={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Autor"
          placeholder="Digite seu cargo"
          value={autor}
          aoAlterado={(valor) => setAutor(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
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
    </section>
  );
};

export default Formulario;
