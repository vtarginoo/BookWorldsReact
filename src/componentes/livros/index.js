import Cards from "../cards";
import "./livros.css";

const Livros = (props) => {
  const styleSection = { backgroundColor: props.corDoFundo };
  const styleH3 = { borderBottomColor: props.corDoCard };

  return (
    props.livros.length > 0 && (
      <section className="livros-class" style={styleSection}>
        <h3 style={styleH3}> {props.nome} </h3>

        <div className="livros-card">
          {props.livros.map((livro) => (
            <Cards
              key={livro.nome}
              nome={livro.nome}
              autor={livro.autor}
              image={livro.image}
              corDoCard={props.corDoCard}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Livros;
