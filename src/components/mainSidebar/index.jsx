
import playlist01 from "../../img/playlist01.png"
import playlist02 from "../../img/playlist02.png"
import playlist03 from "../../img/playlist03.png"
import * as S from './styles'
import { Link } from "react-router-dom" 
function MainSidebar(props) {
   function SidebarItem(prop) {
      return (
         
         <S.SidebarItem >
              <Link to={`/main/` + prop.plnumber} >
               {props.loading ? (<S.ImgLoad />) : <S.SidebarImg src={prop.src} alt="day's playlist" /> }
              </Link>
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
            <SidebarItem plnumber="1" src={playlist01} />
            <SidebarItem plnumber="2" src={playlist02} />
            <SidebarItem plnumber="3" src={playlist03} />
          </S.SidebarList>
      </S.SidebarBlock>
  </S.MainSidebar>
   );
 }
 
 export default MainSidebar;