

import './App.css';
import { useState } from 'react';
import { AppRoutes } from './routes';
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

const Wrapper = styled.div`
   width: 100%;
   min-height: 100%;
   overflow: hidden;
   background-color: #383838;
 }`

function App() {
  
   const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ login: "taradam" });
  const handleLogout = () => setUser(null);

  return (
   
     <Wrapper className="wrapper">
      <GlobalStyle/>
         <AppRoutes user={user} onAuthButtonClick={user ? handleLogout : handleLogin}  />
    </Wrapper>
  );
  
}

export default App;

//Здравствуйте, вот у вас в примере было показано что вы передавали функцию и Переменную User В NavBar(При авторизации) А у нас нету страницы такой как реализовать это на прямую ?