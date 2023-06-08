import playlist01 from "./img/playlist01.png"
import playlist02 from "./img/playlist02.png"
import playlist03 from "./img/playlist03.png"
function SidebarItem(props) {
   return (
      <div className="sidebar__item">
           <a className="sidebar__link" href={props.href}>
               <img className="sidebar__img" src={props.src} alt="day's playlist" />
           </a>
       </div>
)}
function mainSidebar() {
   return (
      <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
          <div className="sidebar__list">
            <SidebarItem src={playlist01} href="#"/>
            <SidebarItem src={playlist02} href="#"/>
            <SidebarItem src={playlist03} href="#"/>
          </div>
      </div>
  </div>
   );
 }
 
 export default mainSidebar;