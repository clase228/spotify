import * as S from "./styles";
import { useState, useEffect } from "react";
import MainNav from "../../components/mainNav";
import MainCenterblock from "../../components/mainCenterblock";
import MainSidebar from "../../components/mainSidebar";
import Bar from "../../components/bar";
import { useGetTracksQuery } from "../../services/tracks";
import { useGetCatalogQuery } from "../../services/catalog" 

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selectors/auth"
export const Main = () => {
  const [trackUrl, setTrackUrl] = useState('');
  const [isNoTrack, setIsNoTrack] = useState(false);
 
function playTrackInfo(trackUrl) {
   setTrackUrl(trackUrl)
   setIsNoTrack(true)
}
let namePlaylist
let Gdata;
let loading;
   const auth_data = useSelector(authSelector);
const params = useParams()
const {data:getTracksData,isLoading:loadingTracksData} = useGetTracksQuery();
const {data:getCatalogData,isLoading:loadingCatalogData} = useGetCatalogQuery()
console.log(loadingTracksData);
if (params.id === 'main') {
   namePlaylist = 'Треки'
   loading=loadingTracksData
   Gdata = getTracksData
}else if(params.id !== 'my'){
   namePlaylist = getCatalogData[params.id - 1].items[0].genre
   loading = loadingCatalogData
   Gdata = getCatalogData[params.id - 1].items
}else if(params.id === 'my'){
   namePlaylist = 'Мои треки'
   Gdata = []
   let favorite = getTracksData
   loading=loadingTracksData
   favorite.forEach((el,i) =>{
      el.stared_user.forEach((el1,i1)=>{
         if (el1.id === auth_data.user_id) {
            Gdata.push(favorite[i])
         }else{
         }
      })
   })
}
// const randomIndex = Math.floor(Math.random() * Gdata.length);
// const randomObject = Gdata[randomIndex];
// console.log(randomObject);

// console.log(Gdata[Math.floor(Math.random * Gdata.length)]);
function playTrackNext(idTrack,type) {
   if (type ==='next') {
      Gdata?.forEach((el,i) => {
         if (el.id === idTrack) {
            if (i === Gdata.length - 1) {
               setTrackUrl(Gdata[0])
            }else{
               setTrackUrl(Gdata[i+1])
            }
         }
      });
   }else{
      const randomIndex = Math.floor(Math.random() * Gdata.length);
      setTrackUrl(Gdata[randomIndex])
   }
}
function playTrackPrev(idTrack,type) {
   if (type ==='prev') {
      Gdata?.forEach((el,i) => {
         if (el.id === idTrack) {
            if (i === Gdata.length - 1) {
               setTrackUrl(Gdata[0])
            }else{
               setTrackUrl(Gdata[i-1])
            }
            
         }
      });
   }else{
      const randomIndex = Math.floor(Math.random() * Gdata.length);
      setTrackUrl(Gdata[randomIndex])
   }
}

  return (
   <S.Container >
    <S.MainBlock>
      <MainNav />
      <MainCenterblock playTrack={playTrackInfo} loading={loading} Gdata={Gdata} namePlaylist={namePlaylist} />
      <MainSidebar loading={loading}   />
      <Bar trackUrl={trackUrl} playTrackNext={playTrackNext} playTrackPrev={playTrackPrev}  isNoTrack={isNoTrack} />
    </S.MainBlock>
   </S.Container>
      
  );
};
