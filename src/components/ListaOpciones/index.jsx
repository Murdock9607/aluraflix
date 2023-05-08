import styled from "styled-components";

const ListaOpciones = (props) => {
  const StyledSelect = styled.select`
    border-radius: 3px;
    border: none;
    margin: 1rem 0 2rem 0;
    padding: 0.5rem;
    width: 90%;
    background-color: #53585d;
  `;
  const categorias = ["Front End", "Backend", "Innovación y gestión"];
  const manejarCambio = (e) =>{
    console.log( e.target.value)
    props.setcategoria(e.target.value)
  }
  return (
    <StyledSelect value={props.valor} onChange={manejarCambio}>
      <option value="" disabled defaultValue="" hidden>
        Selecciona una categoría
      </option>
      {categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
    </StyledSelect>
  );
};
export default ListaOpciones;
