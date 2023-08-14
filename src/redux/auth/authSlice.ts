import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface IAuthState {
  user: User | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {} as IAuthState,
  reducers: {
    authSetUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});

export const { authSetUser } = authSlice.actions;
export default authSlice.reducer;
