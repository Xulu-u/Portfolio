import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Box = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: black;
    display:black;
     img{
         width :100%;
     }
     p{
         margin: 5px auto 5px auto;
         text-align:center;
     }
`;

export const Container = styled.div`
display:grid;
grid-template-columns: 25% 25% 25% 25%;
max-width: 1080px;
margin: auto;
column-gap: 5px;
`;

export const PageLink = styled(Link)`
text-decoration: none;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: 50% 50%;

img{
    width:100%
}
`;