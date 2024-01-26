import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./cards.css";

const Cards = (props) => {
  console.log("Valor de props.favorito:", props.favorito);
  function favoritar() {
    console.log("Clicou em favoritar", props.id);
    props.aoFavoritar(props.id);
  }

  return (
    <div className="cards">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => props.aoDeletar(props.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: props.corDoCard }}>
        <img src={props.image} alt={props.nome}></img>
      </div>

      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.autor}</h5>
        <div className="favoritar">
          {props.favorito ? (
            <AiFillHeart size={25} onClick={favoritar} color="#ff0000" />
          ) : (
            <AiOutlineHeart size={25} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
