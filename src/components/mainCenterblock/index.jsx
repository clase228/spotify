import iconSprite from "../../img/icon/sprite.svg";
import  { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as S from './styles'
import { useThemeContext } from "../../context/theme";
import { useGetTracksQuery } from "../../services/tracks";
import { useGetCatalogQuery } from "../../services/catalog" 
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selectors/auth"
import { PlaylistItem } from "../PlaylistItem";
function MainCenterblock({playTrack,loading}) {
   
   let namePlaylist
   let Gdata;
   let GisLoading;
 
   const auth_data = useSelector(authSelector);
   const params = useParams()


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
   
const [visibleFilter, setVisibleFilter] = useState(null);
let startGdata = Gdata
let filterAuthor = [];
let filterDate=[]
let filterGenre=[]

const toggleVisibleFilter = (filter) => {
  setVisibleFilter(visibleFilter === filter ? null : filter);
};
const [selectedFilters, setSelectedFilter] = useState({genres: [], authors: []}) 
function handleSort(e,typeFilter) {
   const filtersTrack = Gdata.filter((track) => {
      if(selectedFilters.genres.length){ 
     }
      if(selectedFilters.authors.length){
     }
  }) 
  console.log(selectedFilters.genres.length);
   if (typeFilter === 'author') {
      e.target.classList.contains('active')  ? filterAuthor.forEach((item, index) => {if (item == e.target.textContent) {delete filterAuthor[index]}}): filterAuthor.push(e.target.textContent)
      setSelectedFilter({genres: [filterGenre], authors: [filterAuthor]})
   }
   if(typeFilter === 'genre') {
      e.target.classList.contains('active')  ? filterGenre.forEach((item, index) => {if (item == e.target.textContent) {delete filterGenre[index]}}): filterGenre.push(e.target.textContent)
      setSelectedFilter({genres: [filterGenre], authors: [filterAuthor]})
       }
   e.target.classList.contains('active') ? e.target.classList.remove('active') :e.target.classList.add('active')
   // else if(typeFilter === 'date')  {
   //    console.log('date');
   // }else if(typeFilter === 'genre') {
   //    console.log('genre');
   // }
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
                                 
                                 <PlaylistItem loading={loading} playTrack={playTrack} trackUrl={el} stared_user={el.stared_user} id={el.id} name={el.name} author={el.author} album={el.album} duration_in_seconds={el.duration_in_seconds} />
                              ))
                            }
                        </S.ContentPlaylist>                        
                    </S.CenterblockContent>
                </S.MainCenterblock>
   );
 }
 
 export default MainCenterblock;