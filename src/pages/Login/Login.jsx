import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { __loginUser } from "../../redux/modules/login";
import styled from "styled-components";
import { ButtonStyle } from "./ButtonStyle";
import Mainimg from "../../components/Mainimg";
import Sns from "./Sns";

function Login() {
  const navi = useNavigate();

  const [user, setUser] = useState({
    loginId: "",
    password: "",
  });

  const dispacth = useDispatch();

  const chgInputHandler = (e) => {
    const { value, name } = e.target;
    setUser((user) => {
      return { ...user, [name]: value };
    });
  };

  return (
    <LoginContain>
      <LoginBox
        onSubmit={async (e) => {
          e.preventDefault();
          await dispacth(__loginUser(user));
          navi("/");
        }}
      >
        <div>
          <Mainimg />
        </div>
        <div>
          <InputStyle
            type="text"
            value={user.loginId}
            required
            name="loginId"
            onChange={chgInputHandler}
            placeholder="아이디"
          />
          <InputStyle
            ype="password"
            value={user.password}
            required
            name="password"
            onChange={chgInputHandler}
            placeholder="비밀번호"
          />
        </div>
        <div>
          <LoginButton type="submit">로그인</LoginButton>
        </div>
        <div>
          <Link to={"/signup"}>회원가입</Link>
        </div>
        <div>
          <Sns />
        </div>
      </LoginBox>
    </LoginContain>
  );
}

const LoginButton = styled.button`
  width: 100%;
  margin: 20px 0;
  padding: 15px 10px;
  line-height: 20px;
  font-size: 17px;
  min-height: 50px;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 0 auto;
  width: 100vw;
  height: 100vh;
  max-width: 300px;
`;

const LoginBox = styled.form`
  display: inline-block;
  flex: 1 0 auto;
  padding: 40px 0;
`;

const InputStyle = styled.input`
  position: relative;
  display: block;
  width: 100%;
  padding: 13px 15px 14px;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
  border-color: rgb(219, 219, 219);
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  margin: 0px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  font-family: "Noto Sans KR", "Noto Sans CJK KR", "맑은 고딕", "Malgun Gothic",
    sans-serif;
`;

export default Login;
