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

export const Paragraph = styled.p`
background-color: ${({$ilumina}) => $ilumina ? 'orange':'transparent'};
`;

export const Row = styled.div`
display: flex;
`;

export const Container = styled.div`
max-width: 700px;
margin: auto;
`

export const Img = styled.img`
max-width: 100%;
`
export const QuestionsPanel = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
`
export const Answer = styled.div`
display: flex;
align-items: center;
gap:15px;
`
export const H1 = styled.h1`
text-align: center;
`

export const WorkoutMenu = styled.div`
display: flex;
justify-content: center;
gap: 20px;
`
export const WorkoutContainer = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;
`
export const WorkoutExercisesContainer = styled.div`
margin-top: 100px;
max-width: 600px;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
`

export const WorkoutExerciseImg = styled.img`
border: ${({$isSelected})=>$isSelected ? '4px solid red':'none'};

&:hover{
    border: 2px solid red;
}
`
export const WorkoutSelectedContainer = styled.div`
display: flex;
flex-direction: column;
`