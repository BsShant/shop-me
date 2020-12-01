import styled from 'styled-components';

export const CheckoutItemsField = styled.div`
font-family: 'Oswald', sans-serif;
display: flex;  
padding: 10px 0;
border-bottom: 1px solid black;
align-items: center;
div{
    &:not(:last-child){
        width: 23%;
    }
}

`;

export const CheckoutItemImage = styled.div`
padding-right: 20px;
img{
width: 100%;
}
`;

export const ItemQuantity = styled.div`
display: flex;
padding-left: 10px;
 div{
     cursor: pointer;
}
`;

export const ItemPrice = styled.div`
padding-left: 25px;
`;

export const ItemRemove = styled.div`
cursor: pointer;
padding-left: 15px;
`;