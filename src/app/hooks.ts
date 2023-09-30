import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// 타입이 AppDispatch인 useAppDispatch를 정의
export const useAppDispatch: () => AppDispatch = useDispatch;
// TODO: TypedUseSelectorHook가 무엇인지 알아보기
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;