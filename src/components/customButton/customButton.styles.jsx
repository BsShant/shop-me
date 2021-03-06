import styled, { css } from 'styled-components';

export const RegularButton = styled.button`
font-family: 'Archivo Narrow', sans-serif;
cursor: pointer;
font-size: 1.1em;
padding: 13px 30px;
font-weight: 400;
background-color: black;
color: white;
border: none;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    &:active{
        border: 3px solid black;
    }
    ${props => props.google? GoogleButton : ''}
`;
const GoogleButton= css`
background-color: deepskyblue;
border: outset;
color: white;
border-color: grey black black grey;    
&:hover{
    background-color: skyblue;
    color: black;
        }
    &:active{
            border-width: 3px;
        }
`