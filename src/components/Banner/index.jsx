import banner from "../../assets/images/banner.png";
import styled from "styled-components";
import Categoria from "../Categoria";
import VideoCard from "../Carrusel/VideoCard";

const ImgBanner = styled.div`
  background-image: url(${banner});
  height: 750px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BannerTitulo = styled.div`
  position: absolute;
  top: 512px;
  left: 5%;
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 46px;
`;

const BannerTexto = styled.div`
  position: absolute;
  top: 575px;
  left: 5%;
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
`;

const Banner = () => {
  return (
    <ImgBanner>
      <div>
        <Categoria categoria="Front end" color="#6BD1FF"></Categoria>
        <BannerTitulo>Challenge React</BannerTitulo>
        <BannerTexto>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás <br />
          comprometerte en la resolución de un problema para poder aplicar todos
          los <br />
          conocimientos adquiridos en la formación React.
        </BannerTexto>
      </div>
      <VideoCard 
      imagen="https://i.ytimg.com/vi/ov7vA5HFe6w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2B6wphxS2RA7tQcOphXdyi6WF4g"
      color="#6BD1FF"
      />
    </ImgBanner>
  );
};

export default Banner;
