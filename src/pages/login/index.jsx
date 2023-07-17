import * as S from "./styles";
import Logo from '../../img/logo-dark.png'
import { Link } from "react-router-dom";
import React,{ useState} from 'react'
import { useLoginUserMutation } from "../../services/login";
export const Login = () => {
   const [loginUser, {isLoading}] = useLoginUserMutation();
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
         <S.LoginInput name='login' placeholder="Логин" value={login} onInput={(event) => setLogin(event.target.value)}/>
         <S.LoginInput margined={true} name='password' placeholder="Пароль" type="password" onInput={(event) => setPassword(event.target.value)}/>
         <S.LoginBtn onClick={handleLoginUser} disabled={isLoading} primary={true}>Войти</S.LoginBtn>
         <Link to='/register'><S.LoginBtn primary={false}>Зарегистрироваться</S.LoginBtn></Link>
         
      </S.LoginWrapper>
    </S.Container>
  );
};
