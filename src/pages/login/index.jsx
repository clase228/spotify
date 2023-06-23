import * as S from "./styles";
import Logo from '../../img/logo-dark.png'
import { Link } from "react-router-dom";
import { useState} from 'react'
export const Login = ({user,onAuthButtonClick }) => {
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');

   const setUser = () =>{
      localStorage.setItem('login', login);


   }
  return (
    <S.Container>
      <S.LoginWrapper>
         <S.Logo src={Logo} alt='logo'/>
         <S.LoginInput name='login' placeholder="Логин" value={login} onChange={(event) => setLogin(event.target.value)}/>
         <S.LoginInput margined={true} name='password' placeholder="Пароль" type="password"/>
         <Link to='/main/main' onClick={setUser}><S.LoginBtn primary={true}>Войти</S.LoginBtn></Link>
         <Link to='/register'><S.LoginBtn primary={false}>Зарегистрироваться</S.LoginBtn></Link>
         
      </S.LoginWrapper>
    </S.Container>
  );
};
