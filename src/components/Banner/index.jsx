import banner from "../../assets/images/banner.png"
import VideoBanner from "../../assets/images/VideoBanner.png"
import styled from "styled-components";

const ImgBanner = styled.div`
    background-image: url(${banner});
    height: 770px;
    position: relative;
    border-top: 1px solid #2A7AE4;
`;

const ImgVideo = styled.img`
    position: absolute;
    top: 50%;
    left: 742px;
    height: 260.85px;
    width: 432px;
`;

const BannerTitulo = styled.div`
    position: absolute;
    top: 512px;
    left: 5%;
    text-align: left;
    color: #fff;
    background: transparent;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 46px;
`;

const BannerTexto = styled.div`
    position: absolute;
    top: 575px;
    left: 5%;
    text-align: left;
    color: #fff;
    background: transparent;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
`;

const Division = styled.a`
    position: absolute;
    top: 50%;
    left: 5%;
    border-radius: 3px;
    padding: 5px 20px;
    font-weight: 400;
    border: none;
    color: white;
    background: #6BD1FF;
    font-family: 'Roboto';
    font-size: 60px;
`;

// const StyledContent=styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     background-color: transparent;
// `

const Banner = () => {
    return (
        <ImgBanner>
     
                <div>

                <Division>Front End</Division>
                <BannerTitulo>Challenge React</BannerTitulo>
                <BannerTexto>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás <br/>comprometerte en la resolución de un problema para poder aplicar todos los <br/>conocimientos adquiridos en la formación React.
                </BannerTexto>
                </div>

                <ImgVideo src={VideoBanner} />
        </ImgBanner>
    );

};

export default Banner