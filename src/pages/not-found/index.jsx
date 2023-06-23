import * as S from "./styles";
import { useState, useEffect } from "react";
import MainNav from "../../components/mainNav";
import MainCenterblockNotFound from "../../components/mainCenterblockNotFound";
import MainSidebar from "../../components/mainSidebar";
import Bar from "../../components/bar";
export const NotFound = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // эмуляция загрузки данных
    setTimeout(() => {
      console.log(1);
      setLoading(false);
    }, 5000);
  }, []);

  return (
   <S.Container >
    <S.MainBlock>
      <MainNav />
      <MainCenterblockNotFound  />
      <MainSidebar loading={loading} />
      <Bar loading={loading} />
    </S.MainBlock>
   </S.Container>
      
  );
};
