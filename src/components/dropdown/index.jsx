import  { useState } from 'react';
import * as S from './styles'
import { useThemeContext } from "../../context/theme";
export function Dropdown({content,typeFilter,handleAddAuthorFilter, handleAddGenreFilter,id,name,toggleVisibleFilter,visibleFilter}) {
   const {theme} = useThemeContext()
   
    const res = []

   content.map((el) => {
      res.push(<S.DropdownList style={{color:theme.color}} onClick={typeFilter === 'author' ? (e)=>handleAddAuthorFilter(el,e):(e)=>handleAddGenreFilter(el,e)}>{el}</S.DropdownList>
      )
   })
   return(
      <S.Dropdown >
         <S.FilterButton style={{color:visibleFilter === id ? '#ad61ff' : theme.color,borderColor: visibleFilter === id ? '#ad61ff' : theme.borderColor}}   onClick={() => toggleVisibleFilter(id)} >{name}</S.FilterButton>
         {visibleFilter === id && 
         <S.DropdownWrapper style={{background: theme.bgDropdown}}  >
         <S.DropdownMenu scrollbar={theme.scrollbar} scrollbarInner={theme.scrollbarInner}>{res}</S.DropdownMenu>
      </S.DropdownWrapper>} 
   </S.Dropdown>
   )
}