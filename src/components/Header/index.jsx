import Button from "../Button";
import styled from "styled-components";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const Logo = styled.img`
  height: 40px;
  width: 170px;
`
const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 5vw;
  height: 10vh;
  align-items: center;
  
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="Logo aluraflix"></Logo>
      </Link>
      <Button>Nuevo Video</Button>
    </StyledHeader>
  )
}

export default Header