import iconSprite from "../../img/icon/sprite.svg";
import  { useState } from 'react';
import * as S from './styles'
 function MainCenterblock(props) {
   function PlaylistItem (prop){
      return (
         <S.PlaylistItem >
             <S.PlaylistTrack >
                 <S.TrackTitle >
                     <S.TrackTitleImage >
                         <S.TrackTitleSvg  alt="music">
                             <use href={props.loading ? (<div/>) : (iconSprite + '#icon-note')}></use>
                         </S.TrackTitleSvg>
                     </S.TrackTitleImage>
                     <div>
                         <S.TrackTitleLink href="http://">{props.loading ? (<S.NameIdLoad/>) : prop.nameid }<S.TrackTitleSpan>{props.loading ? (<div/>) : prop.title }</S.TrackTitleSpan></S.TrackTitleLink>
                     </div>
                 </S.TrackTitle>
                 <S.TrackAuthor >
                     <S.TrackAuthorLink  href="http://">{props.loading ? (<S.AuthorLoad />) : prop.author }</S.TrackAuthorLink>
                 </S.TrackAuthor>
                 <S.TrackAlbum >
                     <S.TrackAlbumLink  href="http://">{props.loading ? (<S.AlbumLoad />) : prop.album }</S.TrackAlbumLink>
                 </S.TrackAlbum>
                 <div >
                     <S.TrackTimeSvg alt="time">
                         <use href={iconSprite + '#icon-like'}></use>
                     </S.TrackTimeSvg>
                     <S.TrackTimeText >{props.loading ? (<div/>) : prop.time }</S.TrackTimeText>
                 </div>
             </S.PlaylistTrack>
         </S.PlaylistItem>
      );
   }

// По умолчанию у нас ничего не видно
const [visibleFilter, setVisibleFilter] = useState(null);

const toggleVisibleFilter = (filter) => {
  // если состояние visibleFilter равен значению filter
  // это значит, что мы нажали на тот же фильтр, скрываем блок
  setVisibleFilter(visibleFilter === filter ? null : filter);
};

function Dropdown(props) {
   const res = []

   props.content.forEach(el => {
      res.push(
      <S.DropdownList >{el}</S.DropdownList>
      )
   })
   return(
      <S.Dropdown >
         <S.FilterButton className={visibleFilter === props.id ? 'active' : ''} onClick={() => toggleVisibleFilter(props.id)} >{props.name}</S.FilterButton>
         {visibleFilter === props.id && 
         <S.DropdownWrapper>
         <S.DropdownMenu >{res}</S.DropdownMenu>
      </S.DropdownWrapper>} 
   </S.Dropdown>
   )
}
   return (
      <S.MainCenterblock >
                    <S.CenterblockSearch >
                        <S.SearchSvg >
                            <use href={iconSprite + '#icon-search'}></use>
                        </S.SearchSvg>
                        <S.SearchText type="search" placeholder="Поиск" name="search" />
                    </S.CenterblockSearch>
                    <S.CenterblockH2 >Треки</S.CenterblockH2>
                    <S.CenterblockFilter  >
                        <S.FilterTitle >Искать по:</S.FilterTitle>
                        <Dropdown id="nameid" name="Исполнителю" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                        <Dropdown id="year" name="Году выпуска" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                        <Dropdown id="genre" name="Жанру" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                    </S.CenterblockFilter>

                    <S.CenterblockContent >
                        <S.ContentTitle >
                            <S.col01>Трек</S.col01>
                            <S.col02>ИСПОЛНИТЕЛЬ</S.col02>
                            <S.col03>АЛЬБОМ</S.col03>
                            <S.col04>
                              
                                <S.PlaylistTitleSvg  alt="time">
                                    <use href={iconSprite + '#icon-watch'}></use>
                                </S.PlaylistTitleSvg>
                            </S.col04>
                        </S.ContentTitle>
                        
                      
   
 
                        <S.ContentPlaylist >
                        <PlaylistItem nameid=" Guilt" author="Nero" album="Welcome Reality" time="4:44" />
                        <PlaylistItem nameid=" Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" />
                        <PlaylistItem nameid=" I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22" />
                        <PlaylistItem nameid=" Non Stop" author="Стоункат, Psychopath" album="Non Stop" time="4:12" title="(Remix)" />
                        <PlaylistItem nameid=" Run Run" author="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" title="(feat. AR/CO)" />
                        <PlaylistItem nameid=" Eyes on Fire" author="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" title="(Zeds Dead Remix)" />
                        <PlaylistItem nameid=" Mucho Bien" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" title="(Hi Profile Remix)" />
                        <PlaylistItem nameid=" Knives n Cherries" author="minthaze" album="Captivating" time="1:48" title="" />
                        <PlaylistItem nameid=" How Deep Is Your Love" author="Calvin Harris, Disciples" album="How Deep Is Your Love" time="3:32" title="" />
                        <PlaylistItem nameid=" Morena" author="Tom Boxer" album="Soundz Made in Romania" time="3:36" title="" />
                        <PlaylistItem nameid=" " author="" album="" time="" title="" />
                        </S.ContentPlaylist>                        
                    </S.CenterblockContent>
                </S.MainCenterblock>
   );
 }
 
 export default MainCenterblock;