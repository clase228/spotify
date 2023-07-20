import styled from "styled-components";

export const LoginWrapper = styled.div`
   width: 366px;
   background: #FFFFFF;
   border-radius: 12px;
   display:flex;
   flex-direction: column;
   align-items: center;
   padding:43px 0 47px 0;
`
export const Container = styled.div`
   max-width: 100vw;
   height: 100vh;
   margin: 0 auto;
   position: relative;
   background-color: #181818;
   display: flex;
   align-items: center;
   justify-content: center;
 }`
export const Logo = styled.img`
   margin-bottom:42px;
 }`
export const LoginBtn = styled.button`
   background-color:${props => (props.primary ? "#580EA2" : "transparent")};
   color:${props => (props.primary ? "#FFF" : "#000")};
   border: 1px solid ${props => (props.primary ? "#580EA2" : "#D0CECE")};
   border-radius: 6px;
   width: 278px;
   height: 52px;
   margin-bottom: 20px;
   font-size: 18px;
   line-height: 24px;
   letter-spacing: -0.003em;
   &:hover{
      background: ${props => (props.primary ? '#3F007D' :'#F4F5F6')};
   }
   &:active{
      background: ${props => (props.primary ? '#271A58' :'#D9D9D9')};

   }
 }`
export const LoginInput = styled.input`
   width: 278.5px;
   border: 0;
   outline:none;
   border-bottom: 1px solid #D0CECE;
   
   margin-bottom: 8px;
   padding-bottom: 8px;
   height: 30px;
   font-size: 18px;
   line-height: 24px;
   letter-spacing: -0.003em;
   
 &::placeholder {
   font-size: 18px;
   line-height: 24px;
   letter-spacing: -0.003em;
   font-feature-settings: 'pnum' on, 'lnum' on;
   color: #E1E1E1;
 }
   
 }`
 export const ErrorMessage = styled.div`
   color:#f1416c;
   width: 278.5px;
 
 }`
 export const LoginInputWrapper = styled.div`
 font-size: 14px;
 margin-bottom: ${props => (props.margined ? '60px':'30px')};
 }`