import { createSlice } from "@reduxjs/toolkit";
import { InitialChannelState } from "../Type";

const initialState: InitialChannelState = {
  channelId: null,
  channelName: null,
}

// 채널 상태를 관리하는 리듀서
export const channelSlice = createSlice({
  name: "user",
  // 초기 상태를 정의
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  }
});


export default channelSlice.reducer;
export const { setChannelInfo } = channelSlice.actions;