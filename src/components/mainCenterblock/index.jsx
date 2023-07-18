import iconSprite from "../../img/icon/sprite.svg";
import  { useState } from 'react';
import { useParams } from "react-router-dom";
import * as S from './styles'
import {Playlist} from '../../constants'
import {nameOfPlaylist} from '../../constants'
import { useThemeContext } from "../../context/theme";
import { useGetTracksQuery } from "../../services/tracks";

 function MainCenterblock(props) {
   
     
      const { data,  isLoading } = useGetTracksQuery();
   

  


   const params = useParams()
   const playlist = Playlist.filter((item) => item.playlist === params.id);   
   const namePlaylist = nameOfPlaylist.filter((item) => item.playlist === params.id);

   function PlaylistItem (prop){
      let seconds = prop.time % 60
      function countDigits(n) {
         for(var i = 0; n > 1; i++) {
            n /= 10;
         }
         return i;
      }
      let secondsConvert = countDigits(seconds) === 2 ? seconds : '0' + seconds 
      return (
         <S.PlaylistItem >
             <S.PlaylistTrack >
                 <S.TrackTitle >
                     <S.TrackTitleImage  style={{background:theme.backgroundTrack}}>
                         <S.TrackTitleSvg  alt="music">
                             <use href={props.loading ? (<div/>) : (theme.color === '#fff' ? iconSprite + '#icon-note' : iconSprite + '#icon-note-light')}></use>
                         </S.TrackTitleSvg>
                     </S.TrackTitleImage>
                     <div>
                         <S.TrackTitleLink style={{color:theme.color}} href="http://">{props.loading ? (<S.NameIdLoad/>) : prop.nameid }<S.TrackTitleSpan>{props.loading ? (<div/>) : prop.title }</S.TrackTitleSpan></S.TrackTitleLink>
                     </div>
                 </S.TrackTitle>
                 <S.TrackAuthor >
                     <S.TrackAuthorLink style={{color:theme.color}}  href="http://">{props.loading ? (<S.AuthorLoad />) : prop.author }</S.TrackAuthorLink>
                 </S.TrackAuthor>
                 <S.TrackAlbum >
                     <S.TrackAlbumLink style={{color:theme.color}}  href="http://">{props.loading ? (<S.AlbumLoad />) : prop.album }</S.TrackAlbumLink>
                 </S.TrackAlbum>
                 <div >
                     <S.TrackTimeSvg alt="time">
                         <use href={iconSprite + '#icon-like'}></use>
                     </S.TrackTimeSvg>
                     <S.TrackTimeText >{props.loading ? (<div/>) :   `${Math.floor(prop.time / 60)}:${secondsConvert}` }</S.TrackTimeText>
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
const {theme} = useThemeContext()
function Dropdown(props) {
   const res = []

   props.content.forEach(el => {
      res.push(
      <S.DropdownList style={{color:theme.color}}>{el}</S.DropdownList>
      )
   })
   return(
      <S.Dropdown >
         <S.FilterButton style={{color:visibleFilter === props.id ? '#ad61ff' : theme.color,borderColor: visibleFilter === props.id ? '#ad61ff' : theme.borderColor}}   onClick={() => toggleVisibleFilter(props.id)} >{props.name}</S.FilterButton>
         {visibleFilter === props.id && 
         <S.DropdownWrapper style={{background: theme.bgDropdown}}  >
         <S.DropdownMenu scrollbar={theme.scrollbar} scrollbarInner={theme.scrollbarInner}>{res}</S.DropdownMenu>
      </S.DropdownWrapper>} 
   </S.Dropdown>
   )
}

   return (
      <S.MainCenterblock style={{background: theme.background}}>
                    <S.CenterblockSearch >
                        <S.SearchSvg >
                            <use href={theme.color === '#fff' ? iconSprite + '#icon-search-dark'  :iconSprite + '#icon-search-light'}></use>
                        </S.SearchSvg>
                        <S.SearchText style={{color: theme.color}} color={theme.color} type="search" placeholder="Поиск" name="search" />
                    </S.CenterblockSearch>
                    <S.CenterblockH2 style={{color: theme.color}}>{namePlaylist.length === 0 ? 'Треки' : namePlaylist[0].name}</S.CenterblockH2>
                    <S.CenterblockFilter  >
                        <S.FilterTitle style={{color: theme.color}}>Искать по:</S.FilterTitle>
                        <Dropdown id="nameid" name="Исполнителю" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                        <Dropdown id="year" name="Году выпуска" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                        <Dropdown id="genre" name="Жанру" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                    </S.CenterblockFilter>

                    <S.CenterblockContent >
                        <S.ContentTitle >
                            <S.col01 style={{color:theme.tableTitleColor}}>Трек</S.col01>
                            <S.col02 style={{color:theme.tableTitleColor}}>ИСПОЛНИТЕЛЬ</S.col02>
                            <S.col03 style={{color:theme.tableTitleColor}}>АЛЬБОМ</S.col03>
                            <S.col04 style={{color:theme.tableTitleColor}}>
                              
                                <S.PlaylistTitleSvg  alt="time">
                                    <use href={iconSprite + '#icon-watch'}></use>
                                </S.PlaylistTitleSvg>
                            </S.col04>
                        </S.ContentTitle>
                        <S.ContentPlaylist >
                           {data.map((el, index) => (
                              <PlaylistItem nameid={el.name} author={el.author} album={el.album} time={el.duration_in_seconds} />
                           ))}
                        </S.ContentPlaylist>                        
                    </S.CenterblockContent>
                </S.MainCenterblock>
   );
 }
 
 export default MainCenterblock;