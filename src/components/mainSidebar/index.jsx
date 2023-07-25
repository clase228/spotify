
import { useThemeContext } from "../../context/theme"

import * as S from './styles'

import { useEffect } from "react"
import { authSelector } from "../../store/selectors/auth"
import { useSelector } from "react-redux";
import { useGetCatalogQuery } from "../../services/catalog" 
import { SidebarItem } from "../SidebarItem"
function MainSidebar(props) {
   const {data, isLoading} = useGetCatalogQuery()
   const auth_data = useSelector(authSelector);
   const {theme} = useThemeContext()
   return (
      <S.MainSidebar style={{background: theme.background}}>
      <S.SidebarPersonal className="sidebar__personal">
          <S.SidebarPersonalName style={{color: theme.color}}>{auth_data.username}</S.SidebarPersonalName>
          <S.SidebarAvatar ></S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
          <S.SidebarList>
            {data?.map((el, index) => (
               <SidebarItem plnumber={index + 1} text={el.items[0].genre} />
            ))}
          </S.SidebarList>
      </S.SidebarBlock>
  </S.MainSidebar>
   );
 }
 
 export default MainSidebar;