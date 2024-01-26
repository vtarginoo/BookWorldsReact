import "./campo.css";

const Campo = (props) => {
  const placeholderNovo = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${props.type}`}>
      <label> {props.label} </label>
      <input
        type={props.type}
        id={props.label}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderNovo}
      ></input>
    </div>
  );
};

export default Campo;
