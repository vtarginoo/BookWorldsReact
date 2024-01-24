import "./cards.css";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="cabecalho" style={{ backgroundColor: props.corDoCard }}>
        <img src={props.image} alt={props.nome}></img>
      </div>

      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.autor}</h5>
      </div>
    </div>
  );
};

export default Cards;
