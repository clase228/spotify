import  { useState } from 'react';
import * as S from './styles'
import {Link} from 'react-router-dom';

import logo from "../../img/logo.png"
function MenuItem(props) {
   return (
      <S.MenuItem><Link to={props.href}>{props.link}</Link></S.MenuItem>
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
               <MenuItem href="/main/main" link="Главное" />
               <MenuItem href="/main/my" link="Мой плейлист" />
               <MenuItem href="/" onClick={localStorage.setItem('login', '')} link="Выйти" />
             </S.MenuList>
         </S.NavMenu>
      )}
  </S.MainNav>
   );
 }
 
 export default MainNav;