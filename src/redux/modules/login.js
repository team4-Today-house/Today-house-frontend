import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../axios/api'
import { cookies } from '../../shared/cookies'
import jwt_decode from "jwt-decode"


const initialState = {
    users: [],
    isLoading: false,
    error: null,
  }

// 게시물 조회 함수
  export const __loginUser = createAsyncThunk(
    'loginuser', 
    async (thatUser, thunkAPI) => {
    try {
      console.log(thatUser)
      const response = await api.post(`/api/user/login`,thatUser)
      console.log(response)
      const token = response.headers.authorization
      console.log(token)
      const newtoken = token.split(" ")[1]
      console.log(newtoken)
      const payload = jwt_decode(newtoken);
      cookies.set("token", newtoken,{path:"/"})
      cookies.set("loginId",payload.sub,{path:"/"})
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  })

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers:{

  },
  extraReducers: {
        [__loginUser.pending]: (state, action) => {
            state.isLoading = true
            state.error = false
          },
          [__loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = false
            state.users = action.payload
            alert("로그인이 되었습니다.")
          },
          [__loginUser.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
          },


}})
export const {} = loginSlice.actions
export default loginSlice.reducer