import styled from 'styled-components';

export const Board = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: white;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    border-radius: 8px;
`;

export const Chip = styled.div`
    background:${({ color }) => color};
    width:5%;
    height:5%;
    border-radius: 100%;
    top: ${({ y }) => y}%;
    left: ${({ x }) => x}%;
    position: absolute;
`;
