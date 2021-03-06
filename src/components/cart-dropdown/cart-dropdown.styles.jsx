import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
position: absolute;
    bottom: -315px;
    left: -177px;
    height: 300px;
    width: 220px;
    padding: 20px;
    background: white;
    border: 1.5px grey solid;
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    flex-direction: column;
    box-sizing: border-box;

`;

export const CartDropdownList = styled.div`
overflow: scroll;
height: 215px;
display: flex;
align-items: center;
flex-direction: column;
`;