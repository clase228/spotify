import { useEffect,useState } from 'react';
import MainNav from './components/mainNav';
import MainCenterblock from './components/mainCenterblock';
import MainSidebar from './components/mainSidebar';
import Bar from './components/bar';
import './App.css';
import styled,{createGlobalStyle} from 'styled-components';
const GlobalStyle =createGlobalStyle `
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 
 *:before,
 *:after {
   box-sizing: border-box;
 }
 
 a,
 a:visited {
   text-decoration: none;
   font-family: 'StratosSkyeng', sans-serif;
   cursor: pointer;
 }
 
 button,
 ._btn {
   cursor: pointer;
 }
 
 ul li {
   list-style: none;
 }
 

 
 html,
 body {
   width: 100%;
   height: 100%;
   font-family: 'StratosSkyeng', sans-serif;
   color: #FFFFFF;
 }
`
const MainBlock = styled.div`
   flex: 1 1 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
 }`
const Wrapper = styled.div`
   width: 100%;
   min-height: 100%;
   overflow: hidden;
   background-color: #383838;
 }`
const Container = styled.div`
   max-width: 1920px;
   height: 100vh;
   margin: 0 auto;
   position: relative;
   background-color: #181818;
 }`
function App() {
   const [loading, setLoading] = useState(true);

useEffect(() => {
      // эмуляция загрузки данных
      setTimeout(() => {
         console.log(1);
        setLoading(false);
      }, 5000);
   }, []);


  return (
     <Wrapper className="wrapper">
      <GlobalStyle/>
      <Container >
         <MainBlock >
            <MainNav />
            <MainCenterblock loading={loading}/>
            <MainSidebar loading={loading}/>
            <Bar loading={loading}/>
         </MainBlock>
      </Container>
    </Wrapper>
  );
  
}

export default App;
