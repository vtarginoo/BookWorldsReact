import { useState } from "react";
import Banner from "./componentes/banner";
import Formulario from "./componentes/formulario";
import Livros from "./componentes/livros";
import Rodape from "./componentes/rodape";

function App() {
  const categoriasLivros = [
    {
      nome: "Five Stars",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Bom Livro",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Esperava mais",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Em Pausa",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Quero Ler",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
  ];

  const [livros, setLivros] = useState([]);

  const aoNovoLivroAdicionado = (livro) => {
    setLivros([...livros, livro]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        categoriasLivros={categoriasLivros.map((categoria) => categoria.nome)}
        aoLivroCadastrado={(livro) => aoNovoLivroAdicionado(livro)}
      />

      {categoriasLivros.map((categoria) => (
        <Livros
          key={categoria.nome}
          nome={categoria.nome}
          corDoCard={categoria.corPrimaria}
          corDoFundo={categoria.corSecundaria}
          livros={livros.filter((livro) => livro.categoria === categoria.nome)}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
