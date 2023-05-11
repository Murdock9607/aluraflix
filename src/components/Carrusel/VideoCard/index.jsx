import styled from "styled-components";

const VideoCard = (props) => {
  const ImgVideo = styled.img`
    height: 260.85px;
    width: 432px;
    border-radius: 4px;
    border: 3px solid ${props.color};
    margin: 1rem;
  `;
  return <ImgVideo src={props.linkImage}/>;
};

export default VideoCard;
