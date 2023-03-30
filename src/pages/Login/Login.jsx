import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { __loginUser } from "../../redux/modules/login";
import styled from "styled-components";
import Mainimg from "../../components/Mainimg";
import Sns from "./Sns";
import Button, { btnStyle } from "../../components/Button";

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
    <LoginWrap>
      <LoginContain>
        <LoginBox
          onSubmit={async (e) => {
            e.preventDefault();
            await dispacth(__loginUser(user));
            navi("/");
          }}
        >
          <MainImgWrap>
            <Mainimg height={"50"} logo={true} text={true} />
          </MainImgWrap>
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
            <Button style={btnStyle.loginBtn} width={"100%"}>
              로그인
            </Button>
          </div>
          <div>
            <Link to={"/signup"}>회원가입</Link>
          </div>
          <SnsWrap>
            <Sns />
          </SnsWrap>
        </LoginBox>
      </LoginContain>
    </LoginWrap>
  );
}

const MainImgWrap = styled.div`
  margin-bottom: 30px;
`;

const SnsWrap = styled.div`
  margin-top: 20px;
`;

const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--login-color-gray);
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
