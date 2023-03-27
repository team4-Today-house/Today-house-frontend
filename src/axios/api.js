import axios from 'axios'
import { cookies } from '../shared/cookies'


const api = axios.create({
    baseURL:"http://3.38.244.133:8080",
    // timeout: 1,
    // 오류 확인 가능한지 테스트.. 1밀리세컨드.. 내에 응답을 못받으면 에러처리 하도록 돼 있음.
})



api.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    // const token = cookies.get("token")
    // config.headers["Authorization"] = `Bearer ${token}`;
    return config
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error)
    // return error 가 아님 !! 꼭 프로미스.리젝트 여야만 함
  }
)

api.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    return response
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error)
  }
)

export default api
