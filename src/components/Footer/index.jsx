import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import styled from "styled-components"

const Logo = styled.img`
    height: 60px;
    width: 253px;
    margin-top: 10px;
`;

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #2A7AE4;
    background-color: black;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Link>
                <Logo src={logo} alt="Logo"></Logo>
            </Link>
        </StyledFooter>
    );
};

export default Footer