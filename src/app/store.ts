import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// store를 생성하는 configureStore 함수를 사용하여 store를 생성
export const store = configureStore({
  reducer: userReducer,
});

// useDispatch를 사용하기 위해 타입을 정의
export type AppDispatch = typeof store.dispatch;
// useSelector를 사용하기 위해 타입을 정의
// 현재의 상태를 가져오기 위해 RootState 타입을 정의
export type RootState = ReturnType<typeof store.getState>;