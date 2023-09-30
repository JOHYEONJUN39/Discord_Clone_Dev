import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// store를 생성하는 configureStore 함수를 사용하여 store를 생성
export const store = configureStore({
  reducer: userReducer,
});