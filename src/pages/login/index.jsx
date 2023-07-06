import * as S from "./styles";
import Logo from '../../img/logo-dark.png'
import { Link,useNavigate } from "react-router-dom";
import { useState} from 'react'
export const Login = ({user,onAuthButtonClick }) => {
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const setUser = () =>{
      localStorage.setItem('login', login);
      navigate("/main/1", { replace: false });

      
   }
  return (
    <S.Container>
      <S.LoginWrapper>
         <S.Logo src={Logo} alt='logo'/>
         <S.LoginInput name='login' placeholder="Логин" value={login} onChange={(event) => setLogin(event.target.value)}/>
         <S.LoginInput margined={true} name='password' placeholder="Пароль" type="password"/>
         <S.LoginBtn onClick={setUser} primary={true}>Войти</S.LoginBtn>
         <Link to='/register'><S.LoginBtn primary={false}>Зарегистрироваться</S.LoginBtn></Link>
         
      </S.LoginWrapper>
    </S.Container>
  );
};
