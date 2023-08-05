import styled from "styled-components";


export const SidebarItem = styled.div`
   width: 250px;
   height: 150px;
   &:not(:last-child) {
      margin-bottom: 30px;
    }
`
export const ImgLoad = styled.div`
position: absolute;
width: 250px;
height: 150px;
background: #313131;
` 
export const ImgLoadText = styled.div`
    text-align:center;
   position: absolute;
   left:50%;
   top:50%;
   transform:translate(-50%,-50%);
   font-size:18px;
   color:#fff;
` 
