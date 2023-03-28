import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axios/api";
import { cookies } from "../../shared/cookies";

function KakaoLoginPage() {
  const navi = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const kakaoLogin = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/kakao/callback ?code=${code}`
      );
      cookies.set("token", res.headers.authorization, {
        path: "/",
      });
      alert("로그인성공");
      navi("/");
    } catch (e) {
      alert(e);
    }
  };
  kakaoLogin();
}

export default KakaoLoginPage;
