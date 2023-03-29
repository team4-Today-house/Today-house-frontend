import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Home from '../pages/Home/Home'
import Detail from '../pages/Detail/Detail'
import KakaoLoginPage from '../pages/Login/KakaoLoginPage'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login/kakao" element={<KakaoLoginPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router