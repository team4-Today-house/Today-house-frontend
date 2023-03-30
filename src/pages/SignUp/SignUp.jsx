import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../shared/cookies";
import { useEffect } from "react";
import Mainimg from "../../components/Mainimg";
import Sns from "../Login/Sns";
import styled from "styled-components";
import { Link } from "react-router-dom";
import api from "../../axios/api";

function SignUp() {
  const navi = useNavigate();
  const [user, setUser] = useState({
    loginId: "",
    password: "",
    passwordCheck: "",
    email: "",
  });

  const token = cookies.get("token");

  const chgInputHandler = (e) => {
    const { value, name } = e.target;
    setUser((user) => {
      return { ...user, [name]: value };
    });
  };

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    try {
      if (user.password === user.passwordCheck) {
        console.log(user);
        await api.post(`/api/user/signup`, user);
        navi("/login");
      }
    } catch (e) {
      console.log(e);
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    if (token) {
      navi("/");
    }

    return () => {
      // second
    };
  }, []);

  return (
    <>
      <SignUpHeader>
        <Mainimg 
          width={"100"}
          logo={true}
          text={true}
        />
      </SignUpHeader>
      <SignContain>
        <SignBox onSubmit={submitButtonHandler}>
          <SignMain>회원가입</SignMain>
          <Sns />
          <div>
            <InputLabel>아이디</InputLabel>
          </div>
          <div>
            <InputStyle
              type="text"
              value={user.loginId}
              required
              name="loginId"
              onChange={chgInputHandler}
              placeholder="알파벳 소문자/숫자 0~9/아이디 4~10자리"
            />
          </div>
          <div>
            <InputLabel>이메일</InputLabel>
            <InputStyle
              type="text"
              value={user.email}
              required
              name="email"
              onChange={chgInputHandler}
              placeholder="알파벳 소문자/숫자 0~9/아이디 4~10자리"
            />
          </div>
          <div>
            <InputLabel>비밀번호</InputLabel>
            <PasswordStyle>
              영문,숫자,특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </PasswordStyle>
            <InputStyle
              type="password"
              value={user.password}
              required
              name="password"
              onChange={chgInputHandler}
              placeholder="알파벳 소문자/숫자 0~9/아이디 4~10자리"
            />
          </div>
          <InputLabel>비밀번호확인</InputLabel>
          <InputStyle
            type="password"
            value={user.passwordCheck}
            required
            name="passwordCheck"
            onChange={chgInputHandler}
            placeholder="알파벳 소문자/숫자 0~9/아이디 4~10자리"
          />
          <div>
            <SignUpButton type="submit">회원가입완료</SignUpButton>
            아이디가 있으신가요? <Link to="/login">로그인</Link>
          </div>
        </SignBox>
      </SignContain>
    </>
  );
}

const SignUpHeader = styled.div`
  padding: 30px 0 0 20px;
`

const SignContain = styled.div`
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

const SignBox = styled.form`
  display: inline-block;
  flex: 1 0 auto;
  padding: 40px 0;
`;

export default SignUp;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(47, 52, 56);
  letter-spacing: -0.3px;
  word-break: keep-all;
  text-align: left;
  margin-top: 30px;
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

const PasswordStyle = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  color: rgb(130, 140, 148);
  letter-spacing: -0.3px;
`;

const SignUpButton = styled.button`
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

const SignMain = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
`;
