import styled from "styled-components";
export const Button = styled.button`

   color:${(props) => (props.$primary ? 'palevioletred' : 'white')};
   background-color:${(props) => (props.$primary ? 'white' : 'palevioletred')};
   font-size:20px;
   margin:10px;
   padding: 5px 20px;
   border: 2px solid palevioletred;
   border-radius:3px;
`;