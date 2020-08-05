import styled from "styled-components";

const Button = styled.button`
    background-color:#fbb700;
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:1%;
    margin-bottom:1%;
    font-weight:bold;
    text-transform:uppercase;
    border-radius:5px;
    border:none;
    padding:1%;
    width:50%;
    transition: all .8s ease-out;

    :hover {
        background-color:black;
        color:white;
        cursor:pointer;
    }
`;

export default Button;