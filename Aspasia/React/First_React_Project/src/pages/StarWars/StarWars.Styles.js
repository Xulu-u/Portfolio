import styled from 'styled-components';

export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap:20px;
max-width: 900px;
margin: auto;
img{
    max-width: 100%;
}
`;