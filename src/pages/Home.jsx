import styled from "styled-components";
import Banner from "../components/Banner";
import Categoria from "../components/Categoria";
import VideoCard from "../components/Carrusel/VideoCard";

const StyledHome = styled.div`
  background-color: #000000e5;
`;
const Home = (props) => {
  const { videos, categorias } = props;
  videos.map((video) => video);
  return (
    <StyledHome>
      <Banner />
      {categorias.map((categoria, index) => (
        <Categoria
          categoria={categoria.titulo}
          color={categoria.color}
          descripcion={categoria.descripcion}
          key={index}
          />
          ))}
          {videos.map((video, index) => (
            <VideoCard
              imagen={video.imagen}
              key={index}
              link={video.link}
              titulo={video.titulo}
              categoria={categorias.titulo}
            />
          ))}
      {/* <Categoria titulo={props.categoria.titulo} color={props.categoria.color} /> */}
      {/* <Categoria
        categoria="Front end"
        color="#6BD1FF"
        descripcion="Formación Front End de Alura Latam"
      />
      {videos.map((nuevoVideo, index) => (
        <VideoCard
          imagen={nuevoVideo.imagen}
          key={index}
          link={nuevoVideo.link}
          titulo={nuevoVideo.titulo}
          categoria={categorias.titulo}
        />
      ))}
      <Categoria
        categoria="Back end"
        color="#00C86F"
        descripcion="Formación Back End de Alura Latam"
      />
      {videos.map((nuevoVideo, index) => (
        <VideoCard
          imagen={nuevoVideo.imagen}
          key={index}
          link={nuevoVideo.link}
          titulo={nuevoVideo.titulo}
          categoria={categorias.titulo}
        />
      ))}
      <Categoria
        categoria="Innovación y gestión"
        color="#FE8C2A"
        descripcion="Formación Innovación y Gestión de Alura Latam"
      />
      {videos.map((nuevoVideo, index) => (
        <VideoCard
          imagen={nuevoVideo.imagen}
          key={index}
          link={nuevoVideo.link}
          titulo={nuevoVideo.titulo}
          categoria={categorias.titulo}
        />
      ))} */}
    </StyledHome>
  );
};

export default Home;
