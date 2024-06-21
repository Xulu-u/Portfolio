import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf';

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: white;
		margin: 0;
		display: flex;
		min-width: 320px;
		min-height: 100vh;
	}

	@font-face {
        font-family: myFont;
        src: url(${font});
    }
`;