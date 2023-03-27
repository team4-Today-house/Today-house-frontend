import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../axios/api";

function SignUp() {
  const navi = useNavigate();
  const [user, setUser] = useState({
    loginId: "",
    password: "",
    passwordCheck: "",
    email: "",
  });

  // const token = cookies.get("token");

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
        await axios.post("http://3.38.244.133/api/user/signup", user);
        navi("/login");
      }
    } catch (e) {
      console.log(e);
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  // useEffect(() => {
  //   if (token) {
  //     navigate("/");
  //   }

  //   return () => {
  //     // second
  //   };
  // }, []);

  return (
    <>
      <header>오늘의집</header>
      <form onSubmit={submitButtonHandler}>
        <div>
          아이디 :
          <input
            type="text"
            value={user.loginId}
            required
            name="loginId"
            onChange={chgInputHandler}
            placeholder="알파벳 소문자/슷지0~9/아이디 4~10자리"
          />
        </div>
        <div>
          이메일 :
          <input
            type="text"
            value={user.email}
            required
            name="email"
            onChange={chgInputHandler}
            placeholder="알파벳 소문자/슷지0~9/아이디 4~10자리"
          />
        </div>
        <div>
          비밀번호 :
          <input
            type="password"
            value={user.password}
            required
            name="password"
            onChange={chgInputHandler}
            placeholder="알파벳 소문자/슷지0~9/아이디 4~10자리"
          />
        </div>
        비밀번호확인 :
        <input
          type="password"
          value={user.passwordCheck}
          required
          name="passwordCheck"
          onChange={chgInputHandler}
          placeholder="알파벳 소문자/슷지0~9/아이디 4~10자리"
        />
        <div>
          <button type="submit">회원가입완료</button>
          <button onClick={() => navi("/login")}>뒤로가기</button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
