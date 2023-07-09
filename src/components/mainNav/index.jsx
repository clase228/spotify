import  { useState } from 'react';
import * as S from './styles'
import {Link} from 'react-router-dom';
import iconSprite from "../../img/icon/sprite.svg";
import logo from "../../img/logo.png"
import logoDark from "../../img/logo-dark.png"
import {useThemeContext} from "../../context/theme"
function MenuItem(props) {
   console.log(props);
   return (
      <S.MenuItem><Link  style={{color: props.theme.color}} to={props.href}>{props.link}</Link></S.MenuItem>
   )}
      
      function MainNav() {
   const { toggleTheme } = useThemeContext();
   const { theme } = useThemeContext();
   
   const [visible, setVisible] = useState(true);
   const toggleVisibility = () => {
      setVisible(!visible)
   };

   return (
      <S.MainNav style={{background:theme.background}}>
      <S.NavLogo>
          <S.LogoImage src={theme.color === '#fff' ? logo : logoDark} alt="logo"/>
      </S.NavLogo>
      <S.NavBurger style={{transform: visible? 'rotate(180deg)' : "rotate(0deg)"}} onClick={toggleVisibility}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {visible && (
         <S.NavMenu >
             <S.MenuList className="menu__list">
               <MenuItem theme={theme} href="/main/main" link="Главное" />
               <MenuItem theme={theme} href="/main/my" link="Мой плейлист" />
               <MenuItem theme={theme} href="/" onClick={() => localStorage.setItem('login', '')} link="Выйти" />
               <S.MenuItem onClick={toggleTheme}  >
                  <S.SwitchTheme style={{borderColor: theme.color ,stroke: theme.color}}>
                     <use href={theme.color === '#fff' ? iconSprite + '#icon-turn-night' : iconSprite + '#icon-turn-light'}></use>
                  </S.SwitchTheme>
               </S.MenuItem>
             </S.MenuList>
         </S.NavMenu>
      )}
  </S.MainNav>
   );
 }
 
 export default MainNav;