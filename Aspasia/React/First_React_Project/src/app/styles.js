import styled from 'styled-components';

export const Box = styled.div`
background-color: red;
width: 300px;
height: 300px;
display: ${({$visible})=>$visible ? 'block':'none'};
span{
    background-color: blue;
}
`

export const BoxChange = styled.div`
width: 300px;
height: 300px;
background-color: ${({$color})=>$color ? 'cyan':'red'};
`