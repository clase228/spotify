import styled from "styled-components";
const bgColorFrorLight = '#fff';
const colorFrorLight = '#fff';
const bgColorFrorDark = '#fff';
const colorFrorDark = '#000';

export const MainNav = styled.nav`
  width: 244px;
  padding: 20px 0 20px 36px;
`;
export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.4s ease-in-out;
`;
export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`;
export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;
export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;
export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`;
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  & a{
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
  }
`;
export const MenuLink = styled.a`

`;
export const SwitchTheme = styled.svg`
  width:39px;
  height:39px;
  border:1px solid #000;
  border-radius:100%;
  fill: transparent;
`;

