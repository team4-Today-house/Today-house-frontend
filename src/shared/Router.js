import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Home from '../pages/Home/Home'
import KakaoLoginPage from '../pages/Login/KakaoLoginPage'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login/oauth2/code/kakao" element={<KakaoLoginPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router