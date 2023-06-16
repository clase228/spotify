import styled from "styled-components";
import {Button} from '../button'
const TomatoButton = styled(Button)`
   background-color:tomato;
   border-color:tomato;
   color:white;
`;
export const SubmitButton = ({children, $primary}) =>{
   return <TomatoButton $primary={$primary}>{children}</TomatoButton>
}