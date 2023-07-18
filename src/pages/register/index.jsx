import * as S from "../login/styles";
import Logo from '../../img/logo-dark.png'
import { Link,useNavigate } from "react-router-dom";
import React,{ useState} from 'react'
import { useRegisterUserMutation } from "../../services/login";


export const Register = () => {
   const [RegisterUser, error ] = useRegisterUserMutation();
   const navigate = useNavigate()
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
   const [username, setusername] = useState('');
   const handleLoginUser = () => {
      console.log(login);
      console.log(password);
      console.log(username);
      RegisterUser({
         email: login,
         password: password,
         username: username,
      });
      console.log(error);
      
    };
  return (
    <S.Container>
      <S.LoginWrapper >
            <S.Logo src={Logo} alt='logo'/>
            <S.LoginInput placeholder="Имя" onInput={(event) => setusername(event.target.value)}/>
            <S.LoginInput placeholder="Логин" type="email" required onInput={(event) => setLogin(event.target.value)}/>
            <S.LoginInput placeholder="Повторите пароль" type="password" onInput={(event) => setPassword(event.target.value)}/>
            <S.LoginInput margined={true}  name='password' placeholder="Пароль" type="password"/>
            <S.LoginBtn  onClick={handleLoginUser}>Зарегистрироваться</S.LoginBtn>
      </S.LoginWrapper>
    </S.Container>
  );
};
