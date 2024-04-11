import styled from 'styled-components';
import {css} from 'styled-components';

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

const code = css`
    border-radius: 15px;
`

const desktopStartWidth = 996;

//const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Back = styled.div`
background-color: red;
width: 300px;
height: 300px;
${code}

display: ${({$visible})=>$visible ? 'block':'none'};

${mobile} {
		background-color: green;
	}

&:hover{
    background-color: paleGreen
    }
`;

export const Back2 = styled(Back)`
width: 100%;
`;