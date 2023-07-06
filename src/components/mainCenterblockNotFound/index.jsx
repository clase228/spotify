import { useThemeContext } from "../../context/theme";
import iconSprite from "../../img/icon/sprite.svg";
import SmileCrynung from '../../img/smile_crying.png'
import * as S from './styles'
import {Link} from 'react-router-dom'
 function MainCenterblock(props) {
   const{theme} = useThemeContext()
   return (
      <S.MainCenterblock style={{background: theme.background}}>
                    <S.CenterblockSearch >
                        <S.SearchSvg >
                            <use href={theme.color === '#fff' ? iconSprite + '#icon-search-dark'  :iconSprite + '#icon-search-light'}></use>
                        </S.SearchSvg>
                        <S.SearchText style={{color: theme.color}} color={theme.color} type="search" placeholder="Поиск" name="search" />
                    </S.CenterblockSearch>
                  
                    <S.CenterblockContent >
                       <S.NFTitle style={{color: theme.color}}>404</S.NFTitle>  
                       <S.NFBockText>
                        <S.NFText style={{color: theme.color}}> Страница не найдена </S.NFText>    
                        <S.NFImg src={SmileCrynung}/>
                       </S.NFBockText>
                       <S.NFDescr>Возможно, она была удалена <br /> или перенесена на другой адрес</S.NFDescr>
                       <Link to="main/main"><S.NFBtn>Вернуться на главную</S.NFBtn></Link>
                    </S.CenterblockContent>
                </S.MainCenterblock>
   );
 }
 
 export default MainCenterblock;