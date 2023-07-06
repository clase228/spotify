import logo from "./img/logo.png"
function MenuItem(props) {
   return (
      <li className="menu__item"><a href={props.href} className="menu__link">{props.link}</a></li>
)}
function mainNav() {
   return (
      <nav className="main__nav nav">
      <div className="nav__logo logo">
          <img className="logo__image" src={logo} alt="logo"/>
      </div>
      <div className="nav__burger burger">
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
          <ul className="menu__list">
            <MenuItem href="http://" link="Главное" />
            <MenuItem href="http://" link="Мой плейлист" />
            <MenuItem href="http://" link="Войти" />
          </ul>
      </div>
  </nav>
   );
 }
 
 export default mainNav;