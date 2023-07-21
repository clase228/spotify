import iconSprite from "../../img/icon/sprite.svg";
import  { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as S from './styles'
import {Playlist} from '../../constants'
import {nameOfPlaylist} from '../../constants'
import { useThemeContext } from "../../context/theme";
import { useGetTracksQuery,useLikeTrackMutation } from "../../services/tracks";
import { useGetCatalogQuery } from "../../services/catalog" 
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selectors/auth"

function MainCenterblock({playTrack,loading}) {
   const [test, setTest] = useState();
   let Gdata;
   let GisLoading;
   
   const auth_data = useSelector(authSelector);
   const [LikeTrack, data]  = useLikeTrackMutation();
   const params = useParams()
   const playlist = Playlist.filter((item) => item.playlist === params.id);   

   let namePlaylist

   const {data:getTracksData} = useGetTracksQuery();
   const {data:getCatalogData} = useGetCatalogQuery()
   
   if (params.id === 'main') {
      Gdata = getTracksData
      namePlaylist = 'Треки'
   }else if(params.id !== 'my'){
      namePlaylist = getCatalogData[params.id - 1].items[0].genre
      Gdata = getCatalogData[params.id - 1].items
   }else if(params.id === 'my'){
      namePlaylist = 'Мои треки'
      Gdata = []
      let favorite = getTracksData
      favorite.forEach((el,i) =>{
         el.stared_user.forEach((el1,i1)=>{
            if (el1.id === auth_data.user_id) {
               Gdata.push(favorite[i])
            }else{
            }
         })
      })
     
   
   }
   
function handleMouseEnter(event,id) {
   
   
}
function handleMouseLeave(event,id) {
 
   
}
   function PlaylistItem (prop){
      let seconds = prop.time % 60
      function countDigits(n) {
         for(var i = 0; n > 1; i++) {
            n /= 10;
         }
         return i;
      }
      let secondsConvert = countDigits(seconds) === 2 ? seconds : '0' + seconds 
      function handleToggleLike(id) {
         LikeTrack({id, authorization: `${auth_data.access}`})
      }
      return (
         <S.PlaylistItem id={prop.id}  onMouseEnter={(event) => handleMouseEnter(event,prop.id)} onMouseLeave={(event) =>handleMouseLeave(event,prop.id)}>
             <S.PlaylistTrack >
                 <S.TrackTitle >
                     <S.TrackTitleImage onClick={() =>playTrack(prop.trackUrl)} style={{background:theme.backgroundTrack}}>
                         <S.TrackTitleSvg  alt="music">
                             <use href={loading ? (<div/>) : (theme.color === '#fff' ? iconSprite + '#icon-note' : iconSprite + '#icon-note-light')}></use>
                         </S.TrackTitleSvg>
                     </S.TrackTitleImage>
                     <div>
                         <S.TrackTitleLink style={{color:theme.color}}>{loading ? (<S.NameIdLoad/>) : prop.nameid }<S.TrackTitleSpan>{loading ? (<div/>) : prop.title }</S.TrackTitleSpan></S.TrackTitleLink>
                     </div>
                 </S.TrackTitle>
                 <S.TrackAuthor >
                     <S.TrackAuthorLink style={{color:theme.color}}  >{loading ? (<S.AuthorLoad />) : prop.author }</S.TrackAuthorLink>
                 </S.TrackAuthor>
                 <S.TrackAlbum >
                     <S.TrackAlbumLink style={{color:theme.color}}  >{loading ? (<S.AlbumLoad />) : prop.album }</S.TrackAlbumLink>
                 </S.TrackAlbum>
                 <div >
                     <S.TrackTimeSvg alt="time" onClick={() => handleToggleLike(prop.id)}>
                         <use href={iconSprite + '#icon-like'} ></use>
                     </S.TrackTimeSvg>
                     <S.TrackTimeText >{loading ? (<div/>) :   `${Math.floor(prop.time / 60)}:${secondsConvert}` }</S.TrackTimeText>
                 </div>
             </S.PlaylistTrack>
         </S.PlaylistItem>
      );
   }


const [visibleFilter, setVisibleFilter] = useState(null);
let startGdata = Gdata
let filterAuthor = [];
let filterDate=[]
let filterGenre=[]
const toggleVisibleFilter = (filter) => {
  setVisibleFilter(visibleFilter === filter ? null : filter);
};
function handleSort(e,typeFilter) {
   Gdata = startGdata
   if (typeFilter === 'author') {
      e.target.classList.contains('active')  ? filterAuthor.forEach((item, index) => {if (item == e.target.textContent) {delete filterAuthor[index];}}): filterAuthor.push(e.target.textContent)
      Gdata.forEach((el,i)=>{
         filterAuthor.forEach((el1,i1)=>{
            Gdata = Gdata.filter(item => filterAuthor.includes(item.author));
         })
      })
      console.log(filterAuthor);
      console.log(Gdata);
   }else if(typeFilter === 'date')  {
      console.log('date');
   }else if(typeFilter === 'genre') {
      console.log('genre');
   }
   e.target.classList.contains('active') ? e.target.classList.remove('active') :e.target.classList.add('active')
}

const {theme} = useThemeContext()
function Dropdown(props) {
   const res = []

   props.content.map(el => {
      res.push(<S.DropdownList style={{color:theme.color}} onClick={(e) =>handleSort(e,props.typeFilter)}>{el}</S.DropdownList>
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
let author = []
let genre = []
let date = []
Gdata?.forEach(el=>{
   author.push(el.author)
   genre.push(el.genre)
   let str = el.release_date
   if (typeof str === 'string') {
      date.push(str.substr(0, str.length - 6))
   }
   
})
function uniq_fast(a) {
   var seen = {};
   var out = [];
   var len = a.length;
   var j = 0;
   for(var i = 0; i < len; i++) {
        var item = a[i];
        if(seen[item] !== 1) {
              seen[item] = 1;
              out[j++] = item;
        }
   }
   return out;
}
   return (
      
      <S.MainCenterblock style={{background: theme.background}}  >
                    <S.CenterblockSearch >
                        <S.SearchSvg >
                            <use href={theme.color === '#fff' ? iconSprite + '#icon-search-dark'  :iconSprite + '#icon-search-light'}></use>
                        </S.SearchSvg>
                        <S.SearchText style={{color: theme.color}} color={theme.color} type="search" placeholder="Поиск" name="search" />
                    </S.CenterblockSearch>
                    <S.CenterblockH2 style={{color: theme.color}}>{namePlaylist}</S.CenterblockH2>
                    <S.CenterblockFilter  >
                        <S.FilterTitle style={{color: theme.color}}>Искать по:</S.FilterTitle>
                        <Dropdown id="nameid" name="Исполнителю" typeFilter='author' content={uniq_fast(author).sort()}/>
                        <Dropdown id="year" name="Году выпуска" typeFilter='date' content={uniq_fast(date).sort()}/>
                        <Dropdown id="genre" name="Жанру" typeFilter='genre' content={uniq_fast(genre).sort()}/>
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
                           {
                             
                              Gdata?.map((el, index) => (
                                 <PlaylistItem trackUrl={el.track_file} id={el.id} nameid={el.name} author={el.author} album={el.album} time={el.duration_in_seconds} />
                              ))
                            }
                        </S.ContentPlaylist>                        
                    </S.CenterblockContent>
                </S.MainCenterblock>
   );
 }
 
 export default MainCenterblock;