import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axios/api";
import { cookies } from "../../shared/cookies";
import jwt_decode from "jwt-decode";

function KakaoLoginPage() {
  const navi = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const kakaoLogin = async () => {
    try {
      const res = await axios.get(
        `http://3.38.244.133:8080/kakao/callback?code=${code}`
      );
      const newtoken = cookies.set(
        "token",
        res.headers.authorization.substr(7),
        {
          path: "/",
        }
      );
      // const payload = jwt_decode(newtoken);
      // cookies.set("loginId", payload.sub, { path: "/" });
      alert("로그인성공");
      navi("/");
    } catch (e) {
      alert(e);
    }
  };
  kakaoLogin();
}

export default KakaoLoginPage;
