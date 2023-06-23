import styled from "styled-components";

export const MainCenterblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;
export const CenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;
export const CenterblockFilter = styled.div`
  display: flex;

  flex-direction: row;

  align-items: center;
  margin-bottom: 51px;
`;
export const CenterblockContent = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;
export const SearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &::-webkit-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;



export const _btnText = styled.div`
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  &.active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;


export const NFTitle = styled.div`
   font-size: 160px;
   line-height: 168px;
   color: #FFFFFF;
  margin-bottom:2px
`;
export const NFBockText = styled.div`
display: flex;
align-items: center;
margin-bottom:19px;
`;
export const NFText = styled.div`
font-size: 32px;
line-height: 40px;
color: #FFFFFF;

`;
export const NFDescr = styled.div`
   font-size: 18px;
   line-height: 24px;
   width: 431px;
   text-align: center;
   letter-spacing: -0.003em;
   color: #4E4E4E;
   margin-bottom:36px;
`;
export const NFImg = styled.img`
   font-size: 32px;
   line-height: 40px;
   color: #FFFFFF;
   margin-left:8px;

`;
export const NFBtn = styled.button`
width: 278px;
height: 52px;
background: #580EA2;
border-radius: 6px;
font-size: 18px;
line-height: 24px;

letter-spacing: -0.003em;

color: #FFFFFF;

`;
