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

  flex-direction: column;
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
    color: ${props => props.color };
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    color: ${props => props.color};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::-ms-input-placeholder {
    background-color: transparent;
    color: ${props => props.color};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::placeholder {
    background-color: transparent;
    color: ${props => props.color};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const ContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 455px);
  &::-webkit-scrollbar {
   width: 4px;
 }
 &::-webkit-scrollbar-track {
   background: ${props => props.scrollbar} ;
   border-radius: 10px;
 }
 &::-webkit-scrollbar-thumb {
   background: ${props => props.scrollbarInnerMain};
   border-radius: 10px;
 }
`;
export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;
export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const col01 = styled(PlaylistTitleCol)`
  width: 447px;
`;
export const col02 = styled(PlaylistTitleCol)`
  width: 321px;
`;
export const col03 = styled(PlaylistTitleCol)`
  width: 245px;
`;
export const col04 = styled(PlaylistTitleCol)`
  width: 60px;
  text-align: end;
`;
export const PlaylistItem = styled.div`

  position: relative;
  width: 100%;
  display: block;
  margin-bottom: 12px;
  padding-right:5px;
`;
export const PlaylistTrack = styled.div`
  display: flex;

  flex-direction: row;

  justify-content: space-between;

  align-items: center;
`;
export const TrackTitle = styled.div`
  display: flex;

  flex-direction: row;

  align-items: center;
  width: 447px;
`;
export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`;
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;
export const TrackAuthor = styled.div`
  width: 321px;

  display: flex;

  justify-content: flex-start;
`;
export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;
export const TrackAlbum = styled.div`
  width: 245px;
`;
export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
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


export const NameIdLoad = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  width: 356px;
  height: 19px;

  background: #313131;
`;
export const AuthorLoad = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  width: 271px;
  height: 19px;

  background: #313131;
`;
export const AlbumLoad = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  width: 305px;
  height: 19px;
  background: #313131;
`;

export const CountFilter = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: rgb(173, 97, 255);
  border-radius: 50%;
  right: 0;
  top: -10px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
