import styled from 'styled-components';

export const CartItemContainer = styled.div`
display: flex;
`;

export const CartItemImage = styled.div`
width: 30%;
img{
    width: 100%;
}`;

export const CartItemInfo = styled.div`
display: flex;
    flex-direction: column;
    padding: 8px;

    span{
        font-size: 0.9em;
    }`;