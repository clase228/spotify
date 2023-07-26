import styled from "styled-components";
export const Dropdown = styled.div`
  position: relative;
`;
export const DropdownWrapper = styled.div`
  top: 48px;
  position: absolute;
  width: 248px;
  height: 305px;
  background: #313131;
  border-radius: 12px;
  padding: 34px;
  z-index: 1000;
`;
export const DropdownMenu = styled.div`
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${props => props.scrollbar} ;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.scrollbarInner};
    border-radius: 10px;
  }
`;
export const DropdownList = styled.div`
  margin-bottom: 26px;
  cursor: pointer;
  &.active {
    text-decoration-line: underline;
    color: #b672ff!important;
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
export const FilterButton = styled(_btnText)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid;
  border-radius: 60px;
  padding: 6px 20px;
  margin-right: 10px;
`;
