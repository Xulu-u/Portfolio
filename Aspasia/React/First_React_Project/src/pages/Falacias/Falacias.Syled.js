import styled from 'styled-components';

export const P = styled.p`
${({ right }) => right && 'background-color: red;' }
`;