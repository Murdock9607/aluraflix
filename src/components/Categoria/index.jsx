import styled from "styled-components";

const StyledContent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

const Categoria = (props) => {
  const Division = styled.a`
    border-radius: 3px;
    padding: 5px 20px;
    font-weight: 400;
    border: none;
    background: ${props.color};
    font-family: "Roboto";
    font-size: 35px;
    margin: 10rem 0 6rem 6rem;
  `;
  const ImgVideo = styled.img`
    height: 260.85px;
    width: 432px;
    border-radius: 4px;
    border: 3px solid ${props.color};
    margin: 1rem;
  `;

  return (
    <>
      <Division>{props.categoria}</Division>
      <StyledContent>
        <ImgVideo src={props.linkImage} />
      </StyledContent>
    </>
  );
};

export default Categoria;
