import * as S from "./styles";
import Logo from '../../img/logo-dark.png'
import React,{ useState, useEffect} from 'react'
import { useLoginUserMutation, useGetTokenMutation} from "../../services/login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
   update_token,
   update_userInfo,
 } from "../../store/actions/creators/auth";
export const Login = () => {
   const [GetToken, {data: getTokenData}] = useGetTokenMutation();
   const [loginUser, {error,status,data}] = useLoginUserMutation();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleLoginUser = () => {
      loginUser({
        email: email,
        password: password,
      });
    };
    useEffect(()=>{
      if (status === "fulfilled") {
         console.log('GetToken');
         GetToken({
           email: email,
           password: password,
         });
         console.log(getTokenData);
      }
    },[status])
    useEffect(() => {
      
         console.log('12',getTokenData)
         dispatch(update_token(getTokenData?.access, getTokenData?.refresh));

      
    }, [getTokenData]);
   
    useEffect(() => {
      if (data) {
        dispatch(update_userInfo(data?.id, data?.email, data?.username)
          );
          navigate("/main/main");
      }
    }, [data]);
  return (
    <S.Container>
      <S.LoginWrapper>
         <S.Logo src={Logo} alt='logo'/>
         <S.LoginInputWrapper>
            <S.LoginInput name='login' placeholder="Email" onInput={(event) => setEmail(event.target.value)}/>
             {error?.data.email && (
            <S.ErrorMessage>{error.data.email}</S.ErrorMessage>
          )}
         </S.LoginInputWrapper>
         <S.LoginInputWrapper>
            <S.LoginInput margined={true} name='password' placeholder="Пароль" type="password" onInput={(event) => setPassword(event.target.value)}/>
             {error?.data.password && (
            <S.ErrorMessage>{error.data.password}</S.ErrorMessage>
          )}
            {error?.data.detail && (
            <S.ErrorMessage>{error.data.detail}</S.ErrorMessage>
          )}
          
         </S.LoginInputWrapper>
         
         <S.LoginBtn onClick={handleLoginUser}  primary={true}>Войти</S.LoginBtn>
         <Link to='/register'><S.LoginBtn primary={false}>Зарегистрироваться</S.LoginBtn></Link>
         
      </S.LoginWrapper>
    </S.Container>
  );
};
