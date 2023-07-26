import * as S from "./styles";
import { useState, useEffect } from "react";
import MainNav from "../../components/mainNav";
import MainCenterblock from "../../components/mainCenterblock";
import MainSidebar from "../../components/mainSidebar";
import Bar from "../../components/bar";
export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [trackUrl, setTrackUrl] = useState('');

  useEffect(() => {
    // эмуляция загрузки данных
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
function playTrackInfo(trackUrl) {
   setTrackUrl(trackUrl)
 
}


  return (
   <S.Container >
    <S.MainBlock>
      <MainNav />
      <MainCenterblock playTrack={playTrackInfo} loading={loading}/>
      <MainSidebar loading={loading}   />
      <Bar trackUrl={trackUrl}   />
    </S.MainBlock>
   </S.Container>
      
  );
};
