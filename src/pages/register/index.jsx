import * as S from "../login/styles";
import Logo from "../../img/logo-dark.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetTokenMutation,
} from "../../services/login";
import { useDispatch } from "react-redux";
import {
  update_token,
  update_userInfo,
} from "../../store/actions/creators/auth";

export function Register () {
  const [RegisterUser, { error, status }] = useRegisterUserMutation();
  const [loginUser, test] = useLoginUserMutation();
  const [GetToken, { data }] = useGetTokenMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const handleLoginUser = () => {
    RegisterUser({
      email: email,
      password: password,
      username: username,
    });
  };
  const [isUserInfo, setIsUserInfo] = useState(false);
  const [isTocken, setIsTocken] = useState(false);
  useEffect(() => {
    if (status === "fulfilled") {
      loginUser({
        email: email,
        password: password,
      });
      GetToken({
        email: email,
        password: password,
      });
    }
  }, [status]);
  useEffect(() => {
    if (data?.access) {
      dispatch(update_token(data?.access, data?.refresh));
      setIsTocken(true)
    }
  }, [data]);
  useEffect(() => {
    if (test.data) {
      dispatch(
        update_userInfo(test?.data.id, test?.data.email, test?.data.username)
        );
        setIsTocken(true)
    }
  }, [test]);
  if (isUserInfo && isTocken) {
   navigate("/main/main")
}
  return (
    <S.Container>
      <S.LoginWrapper>
        <S.Logo src={Logo} alt="logo" />
        <S.LoginInputWrapper>
          <S.LoginInput
            placeholder="Имя"
            onInput={(event) => setusername(event.target.value)}
          />
          {error?.data.username && (
            <S.ErrorMessage>{error.data.username}</S.ErrorMessage>
          )}
        </S.LoginInputWrapper>
        <S.LoginInputWrapper>
          <S.LoginInput
            placeholder="Почта"
            type="email"
            required
            onInput={(event) => setLogin(event.target.value)}
          />
          {error?.data.email && (
            <S.ErrorMessage>{error.data.email}</S.ErrorMessage>
          )}
        </S.LoginInputWrapper>
        <S.LoginInputWrapper>
          <S.LoginInput
            placeholder="Пароль"
            type="password"
            onInput={(event) => setPassword(event.target.value)}
          />
          {error?.data.password && (
            <S.ErrorMessage>{error.data.password}</S.ErrorMessage>
          )}
        </S.LoginInputWrapper>
        <S.LoginInputWrapper margined={true}>
          <S.LoginInput name="password" placeholder="Повторите пароль" type="password" />
        </S.LoginInputWrapper>

        <S.LoginBtn onClick={handleLoginUser}>Зарегистрироваться</S.LoginBtn>
      </S.LoginWrapper>
    </S.Container>
  );
};
