import styled from 'styled-components';

export const BackgroundImage = styled.div`
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-size:  cover;
transition: cubic-bezier(0.6, -0.08, 0.735, 0.045) 2s;
`;

export const MenuItemField = styled.div`
width: 350px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid black;
position: relative;
overflow: hidden;
cursor: pointer;
flex: auto;
margin-right: 20px;

&:hover ${BackgroundImage}{
    transform: scale(1.3);
}
`;

export const MenuInfo = styled.div`
background-color: rgba(255,255,255,0.7); 
width: 150px;
text-align: center;
display: flex;
height: 90px;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
border: 1px solid black;
&:hover{
    background-color: rgba(255,255,255,0.9);
}
h3{
    font-family: 'Lobster', cursive;
}
p{
    font-family: 'Oswald', sans-serif;
}
`;

