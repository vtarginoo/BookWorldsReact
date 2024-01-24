import "./campoTexto.css";

const CampoTexto = (props) => {
  const placeholderNovo = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label> {props.label} </label>
      <input
        id={props.label}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderNovo}
      ></input>
    </div>
  );
};

export default CampoTexto;
