import { useState } from "react";
import hexToRgba from "hex-to-rgba";
import { v4 as uuidv4 } from "uuid";
import Banner from "./componentes/banner";
import Formulario from "./componentes/formulario";
import Livros from "./componentes/livros";
import Rodape from "./componentes/rodape";

function App() {
  const [categoriasLivros, setCategoriasLivros] = useState([
    {
      id: uuidv4(),
      nome: "Five Stars",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Bom Livro",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Esperava mais",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Em Pausa",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "Quero Ler",
      cor: "#DB6EBF",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "The Alchemist",
      autor: "Paulo Coelho",
      image:
        "https://www.thepaintedporch.com/cdn/shop/products/ScreenShot2021-04-19at1.21.04PM_1024x.png?v=1618856490",
      categoria: categoriasLivros[0].nome,
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: "Discipline Is Destiny: The Power of Self-Control",
      autor: "Ryan Holiday",
      image:
        "https://www.thepaintedporch.com/cdn/shop/products/DisciplineCover_43ee19e8-01df-4cbf-bdb5-c2b234fdb58c_1024x.jpg?v=1660592355",
      categoria: categoriasLivros[1].nome,
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: "Ego Is The Enemy",
      autor: "Ryan Holiday",
      image:
        "https://www.thepaintedporch.com/cdn/shop/products/DisciplineCover_43ee19e8-01df-4cbf-bdb5-c2b234fdb58c_1024x.jpg?v=1660592355",
      categoria: categoriasLivros[0].nome,
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: "MEDITATIONS - MARCUS AURELIUS",
      autor: "Marcus Aurelius",
      image:
        "https://www.thepaintedporch.com/cdn/shop/files/Screenshot2023-07-25at4.37.25PM_1024x.png?v=1690321070",
      categoria: categoriasLivros[0].nome,
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: "Black Swan: Second Edition: The Impact of the Highly Improbable:",
      autor: "NASSIM NICHOLAS TALEB",
      image:
        "https://www.thepaintedporch.com/cdn/shop/products/9780812973815-us_1024x.jpg?v=1623952656",
      categoria: categoriasLivros[4].nome,
    },

    {
      id: uuidv4(),
      favorito: false,
      nome: "Sapiens: A Brief History of Humankind",
      autor: "YUVAL NOAH HARARI",
      image:
        "https://www.thepaintedporch.com/cdn/shop/products/ScreenShot2021-07-22at1.37.14PM_1024x.png?v=1626979063",
      categoria: categoriasLivros[4].nome,
    },
  ];

  const [livros, setLivros] = useState(inicial);

  const aoNovoLivroAdicionado = (livro) => {
    setLivros([...livros, livro]);
    const livroComId = { ...livro, id: uuidv4() };
    setLivros([...livros, livroComId]);
  };

  function deletarLivro(id) {
    setLivros(livros.filter((livro) => livro.id !== id));
  }

  function mudarCorDaCategoria(cor, id) {
    setCategoriasLivros(
      categoriasLivros.map((categoria) => {
        if (categoria.id === id) {
          categoria.cor = cor;
        }
        return categoria;
      })
    );
  }

  function cadastrarCategoria(novaCategoria) {
    setCategoriasLivros([
      ...categoriasLivros,
      { ...novaCategoria, id: uuidv4() },
    ]);
  }

  function resolverFavorito(id) {
    console.log("Resolvendo favorito para o livro com id:", id);
    setLivros(
      livros.map((livro) => {
        if (livro.id == id) livro.favorito = !livro.favorito;
        return livro;
      })
    );
    // Adicione o console.log aqui para verificar o estado atual
    console.log("Estado atual de livros:", livros);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarCategoria={cadastrarCategoria}
        categoriasLivros={categoriasLivros.map((categoria) => categoria.nome)}
        aoLivroCadastrado={(livro) => aoNovoLivroAdicionado(livro)}
      />

      {categoriasLivros.map((categoria) => (
        <Livros
          id={categoria.id}
          aoFavoritar={resolverFavorito}
          favorito={false}
          key={categoria.nome}
          nome={categoria.nome}
          corDoCard={categoria.cor}
          corDoFundo={hexToRgba(categoria.cor, "0.6")}
          livros={livros.filter((livro) => livro.categoria === categoria.nome)}
          aoDeletar={deletarLivro}
          mudarCor={mudarCorDaCategoria}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
