import  { useState } from 'react';
import * as S from './styles'

import logo from "../../img/logo.png"
function MenuItem(props) {
   return (
      <S.MenuItem className="menu__item"><S.MenuLink href={props.href}>{props.link}</S.MenuLink></S.MenuItem>
)}

function MainNav() {
   
   const [visible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!visible)
   };



   return (
      <S.MainNav >
      <S.NavLogo>
          <S.LogoImage src={logo} alt="logo"/>
      </S.NavLogo>
      <S.NavBurger style={{transform: visible? 'rotate(180deg)' : "rotate(0deg)"}} onClick={toggleVisibility}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {visible && (
         <S.NavMenu >
             <S.MenuList className="menu__list">
               <MenuItem href="http://" link="Главное" />
               <MenuItem href="http://" link="Мой плейлист" />
               <MenuItem href="http://" link="Войти" />
             </S.MenuList>
         </S.NavMenu>
      )}
  </S.MainNav>
   );
 }
 
 export default MainNav;