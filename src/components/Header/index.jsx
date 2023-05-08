import Button from "../Button";
import styled from "styled-components";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const Logo = styled.img`
  height: 40px;
  width: 170px;
`;
const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 5vw;
  height: 10vh;
  align-items: center;
  border-bottom: 1px solid #2A7AE4;
  background-color: black;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="Logo aluraflix"></Logo>
      </Link>
      <Link to={"/nuevoVideo"}>
        <Button>Nuevo Video</Button>
      </Link>
    </StyledHeader>
  );
};

export default Header