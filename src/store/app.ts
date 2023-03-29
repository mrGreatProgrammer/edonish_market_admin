import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { IUserInfo } from "../types/app";
// import { ILoginDataForm } from "../types/form/loginform";
interface userInfoType {
  userId: number;
  userName: string;
  displayName: string;
  stationInfoId: number;
  stationInfo: string;
  userStatus: boolean;
  userRole: string;
  roleSlug: string;
  registerPointId: number;
}

export interface AppState {
  authorized: boolean;
  userInfo: userInfoType | null;
}

const initialState: AppState = {
  authorized: false,
  userInfo: null,
};
//@ts-ignore
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    logoutAC(state) {
      state.userInfo = null;
      state.authorized = false;
    },
  },
  extraReducers: {
  },
});

// Action creators are generated for each case reducer function
export const {
  logoutAC,
} = appSlice.actions;

export default appSlice.reducer;
