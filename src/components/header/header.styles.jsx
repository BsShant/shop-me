import styled , {css} from 'styled-components';
import {
    Link
} from 'react-router-dom';

const NavItem = css`
padding: 0 15px;
font-family: 'Oswald', sans-serif;
text-transform: uppercase;
`

export const HeaderTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;
`;

export const NavBar = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
position: relative;
`;
export const NavLink = styled(Link)`
${NavItem}
`;

export const NavDiv = styled.div`
${NavItem}
`;

export const UserItem = styled.div`
${NavItem}
position: relative;
:focus{
    outline: none;
}
`;

export const ShopBag = styled.div`
${NavItem}
position: relative;
:focus{
    outline: none;
}
`;

export const DisplayUser = styled.div`
background-color: ${props => props.backgroundColor};
width: 30px;
height: 30px;
border-radius: 50%;
justify-content: center;
align-items: center;
display: flex;
border: 1px solid black;
cursor: pointer;
:focus{
     outline: none;
}
`;

export const Logo = styled.div`

`;