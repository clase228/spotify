import * as S from "../login/styles";
import Logo from '../../img/logo-dark.png'
import { Link } from "react-router-dom";
import React,{ useState} from 'react'
import { useRegisterUserMutation } from "../../services/login";
export const Register = () => {
   const [loginUser, {isLoading}] = useRegisterUserMutation();
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');

   const handleLoginUser = () => {
      loginUser({
        email: login,
        password: password,
      });
      setLogin("");
      setPassword("");
    };
  return (
    <S.Container>
      <S.LoginWrapper>
         <S.Logo src={Logo} alt='logo'/>
         <S.LoginInput name='login' placeholder="Логин" onInput={(event) => setLogin(event.target.value)}/>
         <S.LoginInput  name='password' placeholder="Повторите пароль" type="password" onInput={(event) => setPassword(event.target.value)}/>
         <S.LoginInput margined={true}  name='password' placeholder="Пароль" type="password"/>
         <Link><S.LoginBtn onClick={handleLoginUser}>Зарегистрироваться</S.LoginBtn></Link>
         
      </S.LoginWrapper>
    </S.Container>
  );
};
