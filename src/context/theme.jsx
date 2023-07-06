import React,{useContext} from "react";
export const themes = {
   light: {
     color: '#282c34',
     background: "#fff",
     backgroundTrack: "#4E4E4E",
     borderColor: "#000000",
     tableTitleColor:"#696969",
     barSvg:'#d9d9d9',
     progresBarElement:'#2e2e2e',
     progresBar:'#D9D9D9',
     bgDropdown: '#f1f1f1',
     scrollbar: '#4b4949',
     scrollbarInner: '#ffffff',
   },
   dark: {
     color: '#fff',
     background: "#181818",
     backgroundTrack: "#313131",
     borderColor: "#ffffff",
     tableTitleColor:"#B1B1B1",
     barSvg:'#B1B1B1',
     progresBarElement:'#D9D9D9',
     progresBar:'#2e2e2e',
     bgDropdown: '#313131',
     scrollbar: '#ffffff',
     scrollbarInner: '#4b4949',
   },
 };
 
 export const ThemeContext = React.createContext({
   theme: themes.dark,
   toggleTheme: () => {},
 });
 
 
 export const useThemeContext = () => {
   const theme = useContext(ThemeContext);
 
   if(!theme) return theme.dark;
 
   return theme;
 }