
import playlist01 from "../../img/playlist01.png"
import playlist02 from "../../img/playlist02.png"
import playlist03 from "../../img/playlist03.png"
import * as S from './styles'
function MainSidebar(props) {
   function SidebarItem(prop) {
      return (
         <S.SidebarItem >
              <S.SidebarLink  href={prop.href}>
              {props.loading ? (<S.ImgLoad />) : <S.SidebarImg src={prop.src} alt="day's playlist" /> }
              </S.SidebarLink>
          </S.SidebarItem>
   )}
   return (
      <S.MainSidebar >
      <S.SidebarPersonal className="sidebar__personal">
          <S.SidebarPersonalName >Sergey.Ivanov</S.SidebarPersonalName>
          <S.SidebarAvatar ></S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
          <S.SidebarList>
            <SidebarItem src={playlist01} href="#"/>
            <SidebarItem src={playlist02} href="#"/>
            <SidebarItem src={playlist03} href="#"/>
          </S.SidebarList>
      </S.SidebarBlock>
  </S.MainSidebar>
   );
 }
 
 export default MainSidebar;