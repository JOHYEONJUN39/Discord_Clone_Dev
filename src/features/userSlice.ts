import { createSlice } from "@reduxjs/toolkit";
import { InitialUserState } from "../Type";

const initialState: InitialUserState = {
  user: null,
}

// 로그인 상태를 관리하는 리듀서
export const userSlice = createSlice({
  name: "user",
  // 초기 상태를 정의
  initialState,
  reducers: {
    // 로그인 액션을 정의
    login: (state, action) => {
      // 현재 유저의 상태를 action.payload로 갱신
      state.user = action.payload;
    },
    logout: (state) => {
      // 현재 유저의 상태를 null로 갱신
      state.user = null;
    }
  }
});
// console.log(userSlice);

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;