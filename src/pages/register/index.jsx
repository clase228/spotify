import * as S from "../login/styles";
import Logo from '../../img/logo-dark.png'
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <S.Container>
      <S.LoginWrapper>
         <S.Logo src={Logo} alt='logo'/>
         <S.LoginInput name='login' placeholder="Логин"/>
         <S.LoginInput  name='password' placeholder="Повторите пароль" type="password"/>
         <S.LoginInput margined={true} name='password' placeholder="Пароль" type="password"/>
         <Link to='/main'><S.LoginBtn>Зарегистрироваться</S.LoginBtn></Link>
         
      </S.LoginWrapper>
    </S.Container>
  );
};
