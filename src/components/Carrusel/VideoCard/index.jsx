import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoCard = (props) => {
  const { titulo, link, imagen, descripcion, codigo, categoria } = props;
  const ImgVideo = styled.img`
    height: 260.85px;
    width: 432px;
    border-radius: 4px;
    border: 3px solid ${props.color};
    margin: 1rem;
  `;
  const styledImg = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
  return (
    <styledImg>
      <Link to={link}>
        <ImgVideo src={imagen} alt={titulo} />
      </Link>
    </styledImg>
  );
};

export default VideoCard;
