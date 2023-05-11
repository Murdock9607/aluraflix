import styled from "styled-components";
import Banner from "../components/Banner";
import Categoria from "../components/Categoria";

const StyledHome = styled.div`
  background-color: #000000E5;
`;
const Home = () => {
  return (
    <StyledHome>
      <Banner />
      <Categoria categoria="Front end" color="#6BD1FF" descripcion="Formación Front End de Alura Latam"/>
      <Categoria categoria="Back end" color="#00C86F" descripcion="Formación Back End de Alura Latam"/>
      <Categoria categoria="Innovación y gestión" color="#FE8C2A" descripcion="Formación Innovación y Gestión de Alura Latam"/>
    </StyledHome>
  );
};

export default Home;
