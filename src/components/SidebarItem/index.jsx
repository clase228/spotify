import * as S from './style'
import { Link } from "react-router-dom" 
export function SidebarItem({plnumber,text}) {
   return (
      <S.SidebarItem >
           <Link to={`/main/` + plnumber} >
            <S.ImgLoad>
               <S.ImgLoadText>
                  {text}
               </S.ImgLoadText>
            </S.ImgLoad>
           </Link>
       </S.SidebarItem>
)}