import Cards from "../cards";
import "./livros.css";

const Livros = (props) => {
  const styleSection = { backgroundColor: props.corDoFundo };
  const styleH3 = { borderBottomColor: props.corDoCard };

  return (
    props.livros.length > 0 && (
      <section className="livros-class" style={styleSection}>
        <input
          className="input-color"
          type="color"
          value={props.corDoCard}
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
        ></input>
        <h3 style={styleH3}> {props.nome} </h3>

        <div className="livros-card">
          {props.livros.map((livro) => {
            return (
              <Cards
                id={livro.id}
                key={livro.nome}
                nome={livro.nome}
                autor={livro.autor}
                image={livro.image}
                corDoCard={props.corDoCard}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
                favorito={livro.favorito}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Livros;
