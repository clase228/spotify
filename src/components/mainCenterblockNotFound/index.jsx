import iconSprite from "../../img/icon/sprite.svg";
import SmileCrynung from '../../img/smile_crying.png'
import * as S from './styles'
import {Link} from 'react-router-dom'
 function MainCenterblock(props) {
   return (
      <S.MainCenterblock >
                    <S.CenterblockSearch >
                        <S.SearchSvg >
                            <use href={iconSprite + '#icon-search'}></use>
                        </S.SearchSvg>
                        <S.SearchText type="search" placeholder="Поиск" name="search" />
                    </S.CenterblockSearch>
                  
                    <S.CenterblockContent >
                       <S.NFTitle>404</S.NFTitle>  
                       <S.NFBockText>
                        <S.NFText>Страница не найдена </S.NFText>    
                        <S.NFImg src={SmileCrynung}/>
                       </S.NFBockText>
                       <S.NFDescr>Возможно, она была удалена <br /> или перенесена на другой адрес</S.NFDescr>
                       <Link to="main/main"><S.NFBtn>Вернуться на главную</S.NFBtn></Link>
                    </S.CenterblockContent>
                </S.MainCenterblock>
   );
 }
 
 export default MainCenterblock;