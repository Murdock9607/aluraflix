import React from "react";
import styled from "styled-components";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
</style>

const Btn = styled.button`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    border: ${(props) => props.primary ? "none":"1px solid white"};
    color: white;
    background: ${ (props) => props.primary ? "#2A7AE4" : "transparent" };
    cursor: pointer;
    font-family: "Source sans pro", sans-serif;
    font-size: 18px;
`;

const Button = (props) => {
    const {children} = props;
    return (
        <Btn primary={props.primary}> {children} </Btn>
    );

};

export default Button;