import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  padding: 0px;
  text-align: center;
`;

export const LogoImage = styled.img`
  max-width: 50%;
  height: auto;
`;

export const NavOverlay = styled.div`
  width: 100%;
  background-color: #eb621a; 
  color: #ffffff; 
  padding: 5px 0;
  text-align: center;
  font-weight: bold;
`;

export const NavBar = styled.nav`
  background-color: #ffffff; 
  padding: 10px 0;
  border-bottom: 1px solid black;
`;

export const NavLink = styled(Link)`
  color: #000000; 
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
  position: relative; 

  &:hover {
    color: #000000; 
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #eb621a; 
  }
`;