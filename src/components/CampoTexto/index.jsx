import styled from "styled-components";
import { useState } from "react";

const Input = styled.input`
  border-radius: 3px;
  border: none;
  border-bottom: 1px solid #2a7ae4;
  margin: 1rem 0 2rem 0;
  padding: 0.5rem;
  width: 90%;
  background-color: #53585d;
`;

export default function CampoTexto(props) {
  const [valor, setValor] = useState("");
  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };
  return (
    <Input
      placeholder={props.placeholder}
      required={props.required}
      value={props.valor}
      onChange={manejarCambio}
    />
  );
}
