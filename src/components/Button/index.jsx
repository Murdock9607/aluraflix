import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: ${(props) => props.primary ? "none":"1px solid white"};
    color: white;
    background: ${ (props) => props.primary ? "#2A7AE4" : "transparent" };
    cursor: pointer;
`;

const Button = (props) => {
    const {children} = props;
    return (
        <Btn primary={props.primary}> {children} </Btn>
    );

};

export default Button;