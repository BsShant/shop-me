import styled,{ css } from 'styled-components';

const Shrink = css`
transform: translate(0,-28px);
font-size: 0.8rem;
opacity: 1;
`;

export const InputContainer = styled.div`
position: relative;
display: flex;
align-items: center;
padding: 20px 0;
margin-bottom: 30px;
`;

export const Label = styled.label`
position: absolute;
left: 6px;
opacity: 0.6;
font-family: 'Oswald', sans-serif;
       
${props => props.length? Shrink : '' }

`;

export const Input = styled.input`
border: none;
border-bottom: 1px solid black;
width: 100%;
padding: 10px 10px 10px 6px;
font-family: 'Archivo Narrow', sans-serif;

&:focus{
    outline: none;
}
&:focus ~ ${Label}{
    ${Shrink}
}
`;

