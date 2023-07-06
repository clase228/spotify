

import './App.css';
import React,{ useState, useContext} from 'react';
import { AppRoutes } from './routes';
import styled,{createGlobalStyle} from 'styled-components';
import {ThemeContext,themes} from './context/theme'
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

const Wrapper = styled.div`
   width: 100%;
   min-height: 100%;
   overflow: hidden;
   background-color: #383838;
 }`
 function App() {
   
   const [currentTheme, setCurrentTheme] = useState(themes.light);

   const toggleTheme = () => {
     if (currentTheme === themes.dark) {
       setCurrentTheme(themes.light);
       return;
     }
 
     setCurrentTheme(themes.dark);
   };
  
  return (  
     <Wrapper className="wrapper">
      <GlobalStyle/>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
         <AppRoutes  />
      </ThemeContext.Provider>
    </Wrapper>
  );
}

export default App;
