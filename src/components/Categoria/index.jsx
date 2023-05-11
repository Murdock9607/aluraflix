import styled from "styled-components";

const StyledContent = styled.div`
  background-color: transparent;
  padding: 2rem 0 2rem 5rem;
  display: flex;
`;

const Categoria = (props) => {
  const StyledCategoria = styled.a`
    border-radius: 3px;
    padding: 5px 20px;
    font-weight: 400;
    border: none;
    background: ${props.color};
    font-family: "Roboto", sans-serif;
    font-size: 35px;
  `;
  const Descripcion = styled.h1`
    align-self: center;
    padding-left: 2rem;
    font-family: "Roboto", sans-serif;
  `;
  const categorias = [{ nombre: "", descripcion: "", color: "" }];

  return (
    <StyledContent>
      <StyledCategoria>{props.categoria}</StyledCategoria>
      <Descripcion>{props.descripcion}</Descripcion>
    </StyledContent>
  );
};

export default Categoria;
