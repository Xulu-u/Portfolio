import styled from 'styled-components';

export const Container = styled.div`
display: flex;
& >div{
    width: 50%;
}
max-width: 900px;
margin: auto;
img{
    width: 100%;
}
`

export const Row = styled.div`
display: grid;
grid-template-columns: 50% 50%;
`