import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  email: string;
};
const initialState: initialStateType = {
  email: "luiz@gmail.com",
};
export const slice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = slice.actions;
export default slice.reducer;
