import iconSprite from "../../img/icon/sprite.svg";
import  { useState } from 'react';
import * as S from './styles'
import { useThemeContext } from "../../context/theme";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selectors/auth"
import { PlaylistItem } from "../PlaylistItem";
import { Dropdown } from "../dropdown";
function MainCenterblock({playTrack,loading,Gdata,namePlaylist}) {
   
   

   const auth_data = useSelector(authSelector);
   const forLoad = ['1','2','3','1','2','3','1','2','3']


   
const [selectedFilters, setSelectedFilter] = useState({genres: [], authors: [],additionalFilter: '', }) 
const filtersTrack = Gdata?.filter((track) => {
   const isGenreMatched = !selectedFilters.genres.length || selectedFilters.genres.includes(track.genre);
   const isAuthorMatched = !selectedFilters.authors.length || selectedFilters.authors.includes(track.author);
   
   const isAdditionalFilterMatched = !selectedFilters.additionalFilter || Object.values(track).some(value =>
      value !== null && value !== undefined && value.toString().toLowerCase().includes(selectedFilters.additionalFilter.toLowerCase())
    );

    return isGenreMatched && isAuthorMatched && isAdditionalFilterMatched;
}) 
const handleAddGenreFilter = (genre,elem) => {
   setSelectedFilter((prevFilters) => {
     const isGenreAlreadySelected = prevFilters.genres.includes(genre);

     if (isGenreAlreadySelected) {
      elem.target.classList.remove('active')
       const updatedGenres = prevFilters.genres.filter((existingGenre) => existingGenre !== genre);
       return {
         ...prevFilters,
         genres: updatedGenres,
       };
     } else {
      elem.target.classList.add('active')
       return {
         ...prevFilters,
         genres: [...prevFilters.genres, genre],
       };
     }
   });
}
const handleAddAuthorFilter = (author,elem) => {
      setSelectedFilter((prevFilters) => {
        const isAuthorAlreadySelected = prevFilters.authors.includes(author);
  
        if (isAuthorAlreadySelected) {
           elem.target.classList.remove('active')
          const updatedAuthors = prevFilters.authors.filter((existingAuthor) => existingAuthor !== author);
          return {
            ...prevFilters,
            authors: updatedAuthors,
          };
        } else {
         elem.target.classList.add('active')
          return {

            ...prevFilters,
            authors: [...prevFilters.authors, author],
          };
        }
      });
};
const handleInputChange = (event) => {
   setSelectedFilter({
     ...selectedFilters,
     additionalFilter: event.target.value, // Обновляем состояние при вводе текста в input
   });
 };
const {theme} = useThemeContext()
let author =[]
let genre =[]
let date =[]
Gdata?.forEach((el)=>{
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
const [visibleFilter, setVisibleFilter] = useState(null);
   const toggleVisibleFilter = (filter) => {
     setVisibleFilter(visibleFilter === filter ? null : filter);
   };
   return (
      
      <S.MainCenterblock style={{background: theme.background}}  >
                    <S.CenterblockSearch >
                        <S.SearchSvg >
                            <use href={theme.color === '#fff' ? iconSprite + '#icon-search-dark'  :iconSprite + '#icon-search-light'}></use>
                        </S.SearchSvg>
                        <S.SearchText style={{color: theme.color}} color={theme.color} type="search" placeholder="Поиск" name="search" value={selectedFilters.additionalFilter} onInput={handleInputChange} />
                    </S.CenterblockSearch>
                    <S.CenterblockH2 style={{color: theme.color}}>{namePlaylist}</S.CenterblockH2>
                    <S.CenterblockFilter  >
                        <S.FilterTitle style={{color: theme.color}}>Искать по:</S.FilterTitle>
                        <Dropdown id="nameid" name="Исполнителю" typeFilter='author' handleAddAuthorFilter={handleAddAuthorFilter} handleAddGenreFilter={handleAddGenreFilter} toggleVisibleFilter={toggleVisibleFilter} visibleFilter={visibleFilter} content={uniq_fast(author).sort()}/>
                        <Dropdown id="genre" name="Жанру" typeFilter='genre' handleAddGenreFilter={handleAddGenreFilter} handleAddAuthorFilter={handleAddAuthorFilter}  toggleVisibleFilter={toggleVisibleFilter} visibleFilter={visibleFilter} content={uniq_fast(genre).sort()}/>
                        {/* <Dropdown id="year" name="Году выпуска" typeFilter='date' content={uniq_fast(date).sort()}/> */}
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
                        <S.ContentPlaylist scrollbar={theme.scrollbar} scrollbarInnerMain={theme.scrollbarInnerMain}>
                           {loading ? forLoad.map((el)=>(<PlaylistItem loading={loading}/>)) :filtersTrack?.map((el, index) => (
                                 <PlaylistItem  playTrack={playTrack} trackUrl={el} stared_user={el.stared_user} id={el.id} name={el.name} author={el.author} album={el.album} duration_in_seconds={el.duration_in_seconds} user_id={auth_data.user_id} token={auth_data.access} />
                              ))
                           
                            }
                        </S.ContentPlaylist>                        
                    </S.CenterblockContent>
                </S.MainCenterblock>
   );
 }
 
 export default MainCenterblock;