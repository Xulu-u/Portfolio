import React, { ReactNode } from 'react';
import {LayoutContainer, NavBar, NavLink, NavOverlay, LogoImage} from './LayoutStyles.js';

// Define a type for the component's props
type LayoutProps = {
  children: ReactNode; // This type is suitable for any valid React child
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const image = 'https://emtstatic.com/2019/10/logo-elmundotoday2.png';
    return (
    <LayoutContainer>
        <LogoImage src={image} alt="Logo"/>
        <NavOverlay> - La Actualidad del Mañana - </NavOverlay>
        <NavBar>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ display: 'inline-block' }}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li style={{ display: 'inline-block' }}>
                    <NavLink to="/page2">Page 2</NavLink>
                </li>
            </ul>
        </NavBar>
        <main>{children}</main>
    </LayoutContainer>
  );
}

export default Layout;